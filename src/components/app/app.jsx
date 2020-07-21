import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../consts/common-data.js";
import {questionArtistType, questionGenreType} from "../../props/prop-types";
import {ActionCreator} from "../../store/reducer.js";
import {connect} from "react-redux";
import withAudioPlayer from "../../hoc/with-active-player/with-active-player";
import withUserAnswer from "../../hoc/with-user-answer/with-user-answer.js";
import WinScreen from "../win-screen/win-screen.jsx";
import GameOverScreen from "../game-over-screen/game-over-screen.jsx";


const GenreQuestionScreenWrapped = withAudioPlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

class App extends PureComponent {
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
            <GenreQuestionScreenWrapped
              question={questionGenre}
              onGameArtistStage={() => {}}
            />
          </Route>
          <Route exact path="/artist">
            <ArtistQuestionScreenWrapped
              question={questionArtist}
              onGameEnd={() => {}}
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
    const {errorsAnswers, errorsMaxCount} = this.props;

    if (errorsAnswers >= errorsMaxCount) {
      return this._renderGameOverScreen();
    }

    switch (this.props.stage) {
      case GameType.WELCOME:
        return this._renderWelcomeScreen();

      case GameType.GENRE:
        return this._renderGenreQuestionScreen();

      case GameType.ARTIST:
        return this._renderArtistQuestionScreen();

      case GameType.WIN:
        return this._renderWinScreen();

      default:
        return null;
    }
  }


  /**
   * Метод, обеспечивающий отрисовку компонента WelcomeScreen
   * @return {Object} созданный компонент
   */
  _renderWelcomeScreen() {
    const {errorsMaxCount, onGameStart} = this.props;

    return (
      <WelcomeScreen
        errorsMaxCount={errorsMaxCount}
        onGameStart={onGameStart}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderGenreQuestionScreen() {
    const {questionGenre, onGameArtistStage} = this.props;

    return (
      <GameScreen
        type={GameType.GENRE}
      >
        <GenreQuestionScreenWrapped
          question={questionGenre}
          onGameArtistStage={onGameArtistStage}
        />
      </GameScreen>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента ArtistQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderArtistQuestionScreen() {
    const {questionArtist, onGameEnd} = this.props;

    return (
      <GameScreen
        type={GameType.ARTIST}
      >
        <ArtistQuestionScreenWrapped
          question={questionArtist}
          onGameEnd={onGameEnd}
        />
      </GameScreen>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента WinScreen
   * @return {Object} созданный компонент
   */
  _renderWinScreen() {
    const {errorsAnswers, onGameStart, questionArtist, questionGenre} = this.props;
    const questionsCount = [questionArtist, questionGenre].length;

    return (
      <WinScreen
        questionsCount={questionsCount}
        errorsAnswers={errorsAnswers}
        onGameStart={onGameStart}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GameOverScreen
   * @return {Object} созданный компонент
   */
  _renderGameOverScreen() {
    const {onGameStart} = this.props;

    return (
      <GameOverScreen
        onGameStart={onGameStart}
      />
    );
  }
}


App.propTypes = {
  stage: PropTypes.string.isRequired,
  questionGenre: questionGenreType.isRequired,
  questionArtist: questionArtistType.isRequired,
  errorsAnswers: PropTypes.number.isRequired,
  errorsMaxCount: PropTypes.number.isRequired,

  onGameStart: PropTypes.func.isRequired,
  onGameArtistStage: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  stage: state.stage,
  questionArtist: state.questionArtist,
  questionGenre: state.questionGenre,
  errorsMaxCount: state.errorsMaxCount,
  errorsAnswers: state.errorsAnswers
});


const mapDispatchToProps = (dispatch) => ({
  onGameStart() {
    dispatch(ActionCreator.goToGenreScreen());
  },

  onGameArtistStage(question, answer) {
    dispatch(ActionCreator.incrementErrors(question, answer));
    dispatch(ActionCreator.goToArtistScreen());
  },

  onGameEnd(question, answer) {
    dispatch(ActionCreator.incrementErrors(question, answer));
    dispatch(ActionCreator.goToWinScreen());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
