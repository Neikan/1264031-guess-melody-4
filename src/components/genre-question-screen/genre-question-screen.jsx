import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import {answerGenreType, aspectType} from "../../props/prop-types.js";


class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  render() {
    const {onAnswerChange, question} = this.props;
    const {answers: userAnswers} = this.state;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <Header />

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form
            className="game__tracks"
            onSubmit={this._handleFormSubmit(onAnswerChange, question)}
          >
            {answers.map((answer, i) => (
              this._changeAnswer(answer, i, userAnswers)
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
  _changeAnswer(answer, i, userAnswers) {
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
   * Метод, обеспечивающий создание помощника для отправки ответов
   * @param {Function} onAnswerChange функция, обспечивающая выбор ответа
   * @param {Object} question параметры вопроса
   * @return {Function} созданный помощник
   */
  _handleFormSubmit(onAnswerChange, question) {
    return (evt) => {
      evt.preventDefault();
      onAnswerChange(question, this.state.answers);
    };
  }
}


GenreQuestionScreen.propTypes = {
  onAnswerChange: PropTypes.func.isRequired,

  question: PropTypes.shape({
    answers: PropTypes.arrayOf(answerGenreType).isRequired,
    genre: PropTypes.string.isRequired,
    aspect: aspectType.isRequired,
  }).isRequired,
};


export default GenreQuestionScreen;
