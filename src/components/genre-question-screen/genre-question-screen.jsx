import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {questionGenreType} from "../../props/prop-types.js";


class GenreQuestionScreen extends PureComponent {
  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  render() {
    const {onFormSubmit, question} = this.props;

    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={onFormSubmit}
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
      const {answers: userAnswers, renderPlayer, onAnswerChange} = this.props;

      const isCheck = userAnswers.includes(answer.id);

      return (
        <div key={answer.id} className="track">
          {renderPlayer(answer)}
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.id}
              id={answer.id}
              checked={isCheck}
              onChange={() => onAnswerChange(answer.id)} />
            <label className="game__check" htmlFor={answer.id}>Отметить</label>
          </div>
        </div>
      );
    };
  }
}


GenreQuestionScreen.propTypes = {
  question: questionGenreType.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onAnswerChange: PropTypes.func.isRequired
};


export default GenreQuestionScreen;
