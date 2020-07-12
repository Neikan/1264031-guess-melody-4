import {GameType, GameConfig} from "../consts/common-data";
import {questionGenre, questionArtist} from "./../mocks/game-data.js";
import {updateState} from "../utils/utils";


const initialState = {
  stage: GameType.WELCOME,
  questionGenre,
  questionArtist,
  errorsAnswers: 0,
  errorsMaxCount: GameConfig.ERRORS_COUNT
};


const ActionType = {
  STAGE_WELCOME: GameType.WELCOME,
  STAGE_ARTIST: GameType.ARTIST,
  STAGE_GENRE: GameType.GENRE,
};


const ActionCreator = {
  goToWelcomeScreen: () => ({
    type: ActionType.STAGE_WELCOME,
    payload: GameType.WELCOME,
  }),


  goToArtistScreen: () => ({
    type: ActionType.STAGE_ARTIST,
    payload: GameType.ARTIST,
  }),


  goToGenreScreen: () => ({
    type: ActionType.STAGE_GENRE,
    payload: GameType.GENRE,
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.STAGE_WELCOME:
      return updateState(state, {
        stage: GameType.WELCOME,
      });

    case ActionType.STAGE_ARTIST:
      return updateState(state, {
        stage: GameType.ARTIST,
      });


    case ActionType.STAGE_GENRE:
      return updateState(state, {
        stage: GameType.GENRE,
      });

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
