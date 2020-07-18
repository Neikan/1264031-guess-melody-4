import {GameType, GameConfig} from "../consts/common-data";
import {questionGenre, questionArtist} from "../mocks/game-data.js";


const countCorrectGenreAnswers = questionGenre.answers.reduce(
    (count, answer) => answer.genre === questionGenre.genre ? ++count : count, 0);


const updateState = (a, b) => {
  return Object.assign({}, a, b);
};


const isArtistAnswerCorrect = (question, userAnswer) => userAnswer.artist === question.song.artist;


const isGenreAnswerCorrect = (question, userAnswers) => {
  const isCountCorrect = userAnswers.length === initialState.countCorrectGenreAnswers;

  const {answers, genre} = question;

  if (isCountCorrect) {
    const isAllAnswersCorrect = userAnswers.every((userAnswer) => {
      const answer = answers.find((ans) => ans.id === userAnswer);

      if (answer) {
        return answer.genre === genre;
      }

      return false;
    });

    return isAllAnswersCorrect;
  }

  return false;
};


export const initialState = {
  stage: GameType.WELCOME,
  questionGenre,
  countCorrectGenreAnswers,
  questionArtist,
  errorsAnswers: 0,
  errorsMaxCount: GameConfig.ERRORS_MAX_COUNT
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


export const getGameStage = (state, action) => {
  if (action.payload === GameType.WELCOME) {
    return initialState;
  }

  return updateState(state, {
    stage: action.payload,
  });
};
