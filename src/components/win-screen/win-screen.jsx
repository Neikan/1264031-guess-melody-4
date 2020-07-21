import React from "react";
import PropTypes from "prop-types";


const WinScreen = (props) => {
  const {questionsCount, errorsAnswers, onGameStart} = props;
  const correctlyQuestionsCount = questionsCount - errorsAnswers;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {errorsAnswers} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={onGameStart}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};


WinScreen.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  errorsAnswers: PropTypes.number.isRequired,
  onGameStart: PropTypes.func.isRequired,
};


export default WinScreen;
