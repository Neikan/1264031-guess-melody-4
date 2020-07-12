import {GameType, GameConfig} from "../consts/common-data";
import {questionGenre, questionArtist} from "../mocks/game-data.js";


const questionGenreCountAnswers = questionGenre.answers.filter(
    (answer) => answer.genre === questionGenre.genre).length;


const updateState = (a, b) => {
  return Object.assign({}, a, b);
};


const isArtistAnswerCorrect = (question, userAnswer) => {
  return userAnswer.artist === question.song.artist;
};


const isGenreAnswerCorrect = (question, userAnswers) => {
  return (
    userAnswers.length === initialState.questionGenreCountAnswers
      && userAnswers.every((userAnswer) => {
        return (question.answers[getIndex(question.answers, userAnswer)].genre === question.genre);
      })
  );
};


export const initialState = {
  stage: GameType.WELCOME,
  questionGenre,
  questionGenreCountAnswers,
  questionArtist,
  errorsAnswers: 0,
  errorsMaxCount: GameConfig.ERRORS_COUNT
};


export const getStateWithErrors = (state, action) => {
  const errors = state.errorsAnswers + action.payload;

  if (errors >= state.errorsMaxCount) {
    return updateState({}, initialState);
  }

  return updateState(state, {
    errorsAnswers: errors
  });
};


export const getAnswerIsCorrect = (question, userAnswer) => {
  switch (question.aspect) {
    case GameType.ARTIST:
      return isArtistAnswerCorrect(question, userAnswer);

    case GameType.GENRE:
      return isGenreAnswerCorrect(question, userAnswer);

    default:
      return false;
  }
};


export const getIndex = (items, id) => items.findIndex((item) => item.id === id);


export const getGameStage = (state, action) => {
  return updateState(state, {
    stage: action.payload,
  });
};
