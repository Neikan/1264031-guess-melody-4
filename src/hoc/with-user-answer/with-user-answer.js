import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {questionGenreType} from "../../props/prop-types.js";


const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: []
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleAnswerChange = this._handleAnswerChange.bind(this);
    }


    /**
     * Метод, обеспечивающий отрисовку компонента
     * @return {Object} созданный компонент
     */
    render() {
      return (
        <Component
          {...this.props}
          answers={this.state.answers}
          onFormSubmit = {this._handleFormSubmit}
          onAnswerChange = {this._handleAnswerChange}
        />
      );
    }


    /**
     * Метод, обеспечивающий отправку формы
     * @param {Object} evt событие
     */
    _handleFormSubmit(evt) {
      evt.preventDefault();

      const {onGameArtistStage, question} = this.props;

      onGameArtistStage(question, this.state.answers);
    }


    /**
     * Метод, обспечивающий обновление состояния в соответствии с выбранными ответами
     * @param {string} id идентификатор ответа
     */
    _handleAnswerChange(id) {
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


  WithUserAnswer.propTypes = {
    onGameArtistStage: PropTypes.func.isRequired,
    question: questionGenreType.isRequired,
    renderPlayer: PropTypes.func.isRequired
  };


  return WithUserAnswer;
};


export default withUserAnswer;
