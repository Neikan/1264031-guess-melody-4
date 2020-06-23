import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../consts/common-data.js";
import {questionArtistType, questionGenreType} from "../../props/prop-types.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isGameStarted: false,
      stage: GameType.WELCOME
    };

    this._handleGameStart = this._handleGameStart.bind(this);
    this._handleGameEnd = this._handleGameEnd.bind(this);
    this._handleGameArtistStage = this._handleGameArtistStage.bind(this);
  }


  /**
   * Метод, обспечивающий изменение экранов игры
   * @return {Object} экран игры
   */
  render() {
    const {questionGenre, questionArtist} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/genre">
            <GenreQuestionScreen
              question={questionGenre}
              onFormSubmit={() => {}}
            />
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreen
              question={questionArtist}
              onFormSubmit={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку экранов игры
   * @return {Object} экран игры
   */
  _renderGameScreen() {
    const {isGameStarted} = this.state;

    if (!isGameStarted) {
      return this._renderWelcomeScreen();
    }

    if (isGameStarted) {
      switch (this.state.stage) {
        case GameType.GENRE:
          return this._renderGenreQuestionScreen();
        case GameType.ARTIST:
          return this._renderArtistQuestionScreen();
      }
    }

    return null;
  }


  /**
   * Метод, обеспечивающий отрисовку компонента WelcomeScreen
   * @return {Object} созданный компонент
   */
  _renderWelcomeScreen() {
    return (
      <WelcomeScreen
        errorsCount = {this.props.errorsCount}
        onGameStart = {this._handleGameStart}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderGenreQuestionScreen() {
    return (
      <GenreQuestionScreen
        question = {this.props.questionGenre}
        onFormSubmit = {this._handleGameArtistStage}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента ArtistQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderArtistQuestionScreen() {
    return (
      <ArtistQuestionScreen
        question = {this.props.questionArtist}
        onFormSubmit = {this._handleGameEnd}
      />
    );
  }


  /**
   * Метод, обспечивающий старт игры
   */
  _handleGameStart() {
    this.setState({
      isGameStarted: true,
      stage: GameType.GENRE
    });
  }


  /**
   * Метод, обспечивающий окончание игры
   */
  _handleGameEnd() {
    this.setState(() => ({
      isGameStarted: false,
      stage: GameType.WELCOME
    }));
  }


  /**
   * Метод, обспечивающий продолжение игры
   */
  _handleGameArtistStage() {
    this.setState(() => ({
      stage: GameType.ARTIST
    }));
  }
}


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questionArtist: questionArtistType.isRequired,
  questionGenre: questionGenreType.isRequired,
};


export default App;
