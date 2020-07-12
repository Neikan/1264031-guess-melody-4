import {GameType, GameConfig} from "../consts/common-data";
import {getAnswerIsCorrect, updateState, getStateWithErrors, initialState} from "./utils-ans-data";


const ActionType = {
  STAGE_WELCOME: GameType.WELCOME,
  STAGE_ARTIST: GameType.ARTIST,
  STAGE_GENRE: GameType.GENRE,
  ERRORS_INCREMENT: GameConfig.ERRORS_INCREMENT
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
  }),

  incrementErrors: (question, userAnswer) => ({
    type: ActionType.ERRORS_INCREMENT,
    payload: getAnswerIsCorrect(question, userAnswer) ? 0 : 1
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

    case ActionType.ERRORS_INCREMENT:
      return getStateWithErrors(state, action);

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
