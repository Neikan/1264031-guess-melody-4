import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {questionGenreType} from "../../props/prop-types.js";


class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  render() {
    const {answers: userAnswers} = this.state;
    const {answers, genre} = this.props.question;

    return (
      <section className="game game--genre">
        <Header />

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this._handleFormSubmit}
          >
            {answers.map((answer, i) => (
              this._renderAnswer(answer, i, userAnswers)
            ))}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }


  /**
   * Метод, обеспечивающий изменение компонента в соответствии с ответами пользователя
   * @param {Object} answer данные ответа
   * @param {Number} i индекс ответа
   * @param {Object} userAnswers ответы пользователя
   * @return {Object} разметка блока ответа в соответствии с ответом пользователя
   */
  _renderAnswer(answer, i, userAnswers) {
    return (
      <div key={`${i}-${answer.src}`} className="track">
        <button className="track__button track__button--play" type="button" />
        <div className="track__status">
          <audio
            src={answer.src} />
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
            id={`answer-${i}`}
            checked={userAnswers[i]}
            onChange={this._handleAnswerChange(userAnswers, i)} />
          <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
        </div>
      </div>
    );
  }


  /**
   * Метод, обспечивающий создание помощника для выбора ответа
   * @param {Object} userAnswers ответы пользователя
   * @param {Number} i индекс ответа
   * @return {Function} созданный помощник
   */
  _handleAnswerChange(userAnswers, i) {
    return (evt) => {
      this.setState({
        answers: [...userAnswers.slice(0, i), evt.target.checked, ...userAnswers.slice(i + 1)],
      });
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
}


GenreQuestionScreen.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  question: questionGenreType.isRequired,
};


export default GenreQuestionScreen;
