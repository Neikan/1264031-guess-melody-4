import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {questionGenreType} from "../../props/prop-types.js";


class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleAnswerChange = this._handleAnswerChange.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  render() {
    const {answers, genre} = this.props.question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={this._handleFormSubmit}
        >
          {answers.map(this._renderAnswer())}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }


  /**
   * Метод, обеспечивающий изменение компонента в соответствии с ответами пользователя
   * @param {Object} answer данные ответа
   * @return {Object} разметка блока ответа в соответствии с ответом пользователя
   */
  _renderAnswer() {
    return (answer) => {
      const {answers: userAnswers} = this.state;

      const isCheck = userAnswers.includes(answer.id);

      return (
        <div key = {answer.id} className="track">
          <button className="track__button track__button--play" type="button" />
          <div className="track__status">
            <audio
              src = {answer.src} />
          </div>
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.id}
              id = {answer.id}
              checked = {isCheck}
              onChange = {this._handleAnswerChange} />
            <label className="game__check" htmlFor={answer.id}>Отметить</label>
          </div>
        </div>
      );
    };
  }


  /**
   * Метод, обеспечивающий отправку формы
   * @param {Object} evt событие
   */
  _handleFormSubmit(evt) {
    evt.preventDefault();

    const {onFormSubmit, question} = this.props;

    onFormSubmit(question, this.state.answers);
  }


  /**
   * Метод, обспечивающий обновление состояния в соответствии с выбранными ответами
   * @param {Object} evt событие
   */
  _handleAnswerChange(evt) {
    const id = evt.target.id;

    this.setState((prevState) => ({
      answers: this._updateAnswers(prevState.answers, id)
    }));
  }


  /**
   * Метод, выполняющий обновление ответов пользователя
   * @param {Array} prevAnswers ответы пользователя
   * @param {string} id идентификатор изменяемого ответа
   * @return {Array} обновленный массив ответов
   */
  _updateAnswers(prevAnswers, id) {
    return prevAnswers.includes(id) ?
      prevAnswers.filter((prevId) => prevId !== id) :
      prevAnswers.concat(id);
  }
}


GenreQuestionScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  question: questionGenreType.isRequired,
};


export default GenreQuestionScreen;
