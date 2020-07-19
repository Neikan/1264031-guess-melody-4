import {GameType} from "../consts/common-data";
import {getAnswerIsCorrect, getStateWithErrors, initialState, getGameStage} from "./utils-ans-data";


const ActionType = {
  INCREMENT_ERRORS: `increment errors`,
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

  goToWinScreen: () => ({
    type: ActionType.CHANGE_GAME_SCREEN,
    payload: GameType.WIN,
  }),

  incrementErrors: (question, userAnswer) => ({
    type: ActionType.INCREMENT_ERRORS,
    payload: getAnswerIsCorrect(question, userAnswer) ? 0 : 1
  })
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GAME_SCREEN:
      return getGameStage(state, action);

    case ActionType.INCREMENT_ERRORS:
      return getStateWithErrors(state, action);

    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
