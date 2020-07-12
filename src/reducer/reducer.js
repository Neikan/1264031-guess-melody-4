import {GameType} from "../consts/common-data";
import {getAnswerIsCorrect, getStateWithErrors, initialState, getGameStage} from "./utils-ans-data";


const ActionType = {
  ERRORS_INCREMENT: `increment errors`,
  CHANGE_GAME_SCREEN: `change game screen`
};


const ActionCreator = {
  goToWelcomeScreen: () => ({
    type: ActionType.CHANGE_GAME_SCREEN,
    payload: GameType.WELCOME,
  }),

  goToArtistScreen: () => ({
    type: ActionType.CHANGE_GAME_SCREEN,
    payload: GameType.ARTIST,
  }),

  goToGenreScreen: () => ({
    type: ActionType.CHANGE_GAME_SCREEN,
    payload: GameType.GENRE,
  }),

  incrementErrors: (question, userAnswer) => ({
    type: ActionType.ERRORS_INCREMENT,
    payload: getAnswerIsCorrect(question, userAnswer) ? 0 : 1
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GAME_SCREEN:
      return getGameStage(state, action);

    case ActionType.ERRORS_INCREMENT:
      return getStateWithErrors(state, action);

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
