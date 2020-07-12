import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import GameScreen from "../game-screen/game-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";
import {GameType} from "../../consts/common-data.js";
import {questionArtistType, questionGenreType} from "../../props/prop-types";
import withAudioPlayer from "../../hoc/with-audio-player/with-audio-player";
import {ActionCreator} from "../../reducer/reducer.js";
import {connect} from "react-redux";


const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
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
    switch (this.props.stage) {
      case GameType.WELCOME:
        return this._renderWelcomeScreen();

      case GameType.GENRE:
        return this._renderGenreQuestionScreen();

      case GameType.ARTIST:
        return this._renderArtistQuestionScreen();

      default:
        return null;
    }
  }


  /**
   * Метод, обеспечивающий отрисовку компонента WelcomeScreen
   * @return {Object} созданный компонент
   */
  _renderWelcomeScreen() {
    const {errorsCount, handleGameStart} = this.props;

    return (
      <WelcomeScreen
        errorsCount={errorsCount}
        onGameStart={handleGameStart}
      />
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента GenreQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderGenreQuestionScreen() {
    const {questionGenre, handleGameArtistStage} = this.props;

    return (
      <GameScreen
        type={GameType.GENRE}
      >
        <GenreQuestionScreenWrapped
          question={questionGenre}
          onGameArtistStage={handleGameArtistStage}
        />
      </GameScreen>
    );
  }


  /**
   * Метод, обеспечивающий отрисовку компонента ArtistQuestionScreen
   * @return {Object} созданный компонент
   */
  _renderArtistQuestionScreen() {
    const {questionArtist, handleGameEnd} = this.props;

    return (
      <GameScreen
        type={GameType.ARTIST}
      >
        <ArtistQuestionScreenWrapped
          question={questionArtist}
          onGameEnd={handleGameEnd}
        />
      </GameScreen>
    );
  }
}


App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questionArtist: questionArtistType.isRequired,
  questionGenre: questionGenreType.isRequired,
  stage: PropTypes.string.isRequired,
  handleGameStart: PropTypes.func.isRequired,
  handleGameEnd: PropTypes.func.isRequired,
  handleGameArtistStage: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  stage: state.stage,
  questionArtist: state.questionArtist,
  questionGenre: state.questionGenre,
  errorsCount: state.errorsMaxCount,
});


const mapDispatchToProps = (dispatch) => ({
  handleGameStart() {
    dispatch(ActionCreator.goToGenreScreen());
  },

  handleGameEnd() {
    dispatch(ActionCreator.goToWelcomeScreen());
  },

  handleGameArtistStage() {
    dispatch(ActionCreator.goToArtistScreen());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
