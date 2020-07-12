import {reducer, ActionType, ActionCreator} from "./reducer.js";
import {GameType, GameConfig, questionGenre, questionArtist} from "../consts/test-data.js";

describe(`Get initial state`, () => {
  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      stage: GameType.WELCOME,
      questionGenre,
      questionGenreCountAnswers: 2,
      questionArtist,
      errorsAnswers: 0,
      errorsMaxCount: GameConfig.ERRORS_MAX_COUNT
    });
  });
});


describe(`Action creators work correctly`, () => {
  test(`Reducer should change game screen`, () => {
    expect(reducer({
      stage: GameType.WELCOME
    }, {
      type: ActionType.CHANGE_GAME_SCREEN,
      payload: GameType.GENRE
    })).toEqual({
      stage: GameType.GENRE
    });

    expect(reducer({
      stage: GameType.GENRE
    }, {
      type: ActionType.CHANGE_GAME_SCREEN,
      payload: GameType.ARTIST
    })).toEqual({
      stage: GameType.ARTIST
    });
  });


  test(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      errorsAnswers: 0
    }, {
      type: ActionType.INCREMENT_ERRORS,
      payload: 1
    })).toEqual({
      errorsAnswers: 1
    });

    expect(reducer({
      errorsAnswers: 0
    }, {
      type: ActionType.INCREMENT_ERRORS,
      payload: 0
    })).toEqual({
      errorsAnswers: 0
    });
  });
});


describe(`Action creators work correctly`, () => {
  test(`Action creator for going to WelcomeScreen returns correct action`, () => {
    expect(ActionCreator.goToWelcomeScreen()).toEqual({
      type: ActionType.CHANGE_GAME_SCREEN,
      payload: GameType.WELCOME,
    });
  });


  test(`Action creator for going to ArtistScreen returns correct action`, () => {
    expect(ActionCreator.goToArtistScreen()).toEqual({
      type: ActionType.CHANGE_GAME_SCREEN,
      payload: GameType.ARTIST,
    });
  });


  test(`Action creator for going to GenreScreen returns correct action`, () => {
    expect(ActionCreator.goToGenreScreen()).toEqual({
      type: ActionType.CHANGE_GAME_SCREEN,
      payload: GameType.GENRE,
    });
  });


  test(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.incrementErrors({
      aspect: `artist`,
      song: {
        id: `song-1`,
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          id: `artist-1`,
          artist: `correct`,
          picture: ``,
        }, {
          id: `artist-2`,
          artist: `incorrect`,
          picture: ``,
        }, {
          id: `artist-3`,
          artist: `incorrect-2`,
          picture: ``,
        }
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_ERRORS,
      payload: 0,
    });
  });


  test(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.incrementErrors({
      aspect: `artist`,
      song: {
        id: `song-1`,
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          id: `artist-1`,
          artist: `correct`,
          picture: ``
        }, {
          id: `artist-2`,
          artist: `incorrect`,
          picture: ``
        }, {
          id: `artist-3`,
          artist: `incorrect-2`,
          picture: ``
        }
      ]
    }, {
      artist: `incorrect`,
      picture: ``
    })).toEqual({
      type: ActionType.INCREMENT_ERRORS,
      payload: 1,
    });
  });

  test(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.incrementErrors({
      aspect: `genre`,
      genre: `jazz`,
      answers: [
        {
          id: `song-1`,
          genre: `rock`,
          src: ``
        }, {
          id: `song-2`,
          genre: `jazz`,
          src: ``
        }, {
          id: `song-3`,
          genre: `blues`,
          src: ``
        }, {
          id: `song-4`,
          genre: `jazz`,
          src: ``
        }
      ]
    }, [`song-2`, `song-4`])).toEqual({
      type: ActionType.INCREMENT_ERRORS,
      payload: 0
    });
  });


  test(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.incrementErrors({
      aspect: `genre`,
      genre: `jazz`,
      answers: [
        {
          id: `song-1`,
          genre: `blues`,
          src: ``
        }, {
          id: `song-2`,
          genre: `blues`,
          src: ``
        }, {
          id: `song-3`,
          genre: `blues`,
          src: ``
        }, {
          id: `song-4`,
          genre: `blues`,
          src: ``
        }
      ]
    }, [`song-1`, `song-2`, `song-3`, `song-4`])).toEqual({
      type: ActionType.INCREMENT_ERRORS,
      payload: 1
    });
  });
});
