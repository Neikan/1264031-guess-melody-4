import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';
import {questionGenre} from '../../consts/test-data.js';


describe(`Test ArtistQuestionScreen component`, () => {
  test(`GenreQuestionScreen is rendered correctly`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        question={questionGenre}
        onGameArtistStage={() => {}}
        renderPlayer={() => {}}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
