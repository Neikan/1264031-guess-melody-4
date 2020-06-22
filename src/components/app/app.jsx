import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../consts/common-data.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }


  /**
   * Метод, обеспечивающий получение компонента WelcomeScreen
   * @param {Number} errorsCount количество допустимых ошибок
   * @return {Object} созданный компонент
   */
  _getWelcomeScreen(errorsCount) {
    return (
      <WelcomeScreen
        errorsCount={errorsCount}
        onGameStart={this._handleGameStart()}
      />
    );
  }


  /**
   * Метод, обеспечивающий получение компонента ArtistQuestionScreen
   * @param {Object} question параметры вопроса
   * @return {Object} созданный компонент
   */
  _getArtistQuestionScreen(question) {
    return (
      <ArtistQuestionScreen
        question={question}
        onAnswerChange={this._handleAnswerChange()}
      />
    );
  }

  /**
   * Метод, обеспечивающий получение компонента GenreQuestionScreen
   * @param {Object} question параметры вопроса
   * @return {Object} созданный компонент
   */
  _getGenreQuestionScreen(question) {
    return (
      <GenreQuestionScreen
        question={question}
        onAnswerChange={this._handleAnswerChange()}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку экранов игры
   * @return {Object} экран игры
   */
  _renderGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return this._getWelcomeScreen(errorsCount);
    }

    if (question) {
      switch (question.aspect) {
        case GameType.ARTIST:
          return this._getArtistQuestionScreen(question);
        case GameType.GENRE:
          return this._getGenreQuestionScreen(question);
      }
    }

    return null;
  }


  /**
   * Метод, обспечивающий изменение экранов игры
   * @return {Object} экран игры
   */
  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreen
              question={questions[1]}
              onAnswerChange={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreen
              question={questions[0]}
              onAnswerChange={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  /**
   * Метод, обспечивающий создание помощника для изменения состояния при старте игры
   * @return {Function} созданный помощник
   */
  _handleGameStart() {
    return () => {
      this.setState({
        step: 0,
      });
    };
  }


  /**
   * Метод, обспечивающий создание помощника для изменения состояния при выборе ответов
   * @return {Function} созданный помощник
   */
  _handleAnswerChange() {
    return () => {
      this.setState((prevState) => ({
        step: prevState.step + 1,
      }));
    };
  }
}


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};


export default App;
