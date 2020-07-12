import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {questionGenre, questionArtist, GameConfig, GameType} from "../../consts/test-data.js";


const mockStore = configureStore([]);


describe(`Test App component`, () => {
  test(`WelcomeScreen is created and rendered correctly`, () => {
    const store = mockStore({
      stage: GameType.WELCOME,
      errorsAnswers: 0,
      errorsMaxCount: GameConfig.ERRORS_MAX_COUNT,
      questionGenre,
      questionArtist
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`GenreQuestionScreen is created and rendered correctly`, () => {
    const store = mockStore({
      stage: GameType.GENRE,
      errorsAnswers: 0,
      errorsMaxCount: GameConfig.ERRORS_MAX_COUNT,
      questionGenre,
      questionArtist
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`ArtistQuestionScreen is created and rendered correctly`, () => {
    const store = mockStore({
      stage: GameType.ARTIST,
      errorsAnswers: 0,
      errorsMaxCount: GameConfig.ERRORS_MAX_COUNT,
      questionGenre,
      questionArtist
    });

    const tree = renderer.create(
        <Provider store={store}>
          <App />)
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
