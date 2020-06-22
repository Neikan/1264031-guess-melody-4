import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';
import {questionGenreScreen} from '../../consts/test-data.js';


describe(`Test ArtistQuestionScreen component`, () => {
  test(`GenreQuestionScreen is rendered correctly`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        question = {questionGenreScreen}
        onAnswerChange = {() => {}}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
