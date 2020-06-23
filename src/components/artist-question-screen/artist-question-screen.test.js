import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {questionArtistScreen} from '../../consts/test-data.js';


describe(`Test ArtistQuestionScreen component`, () => {
  test(`ArtistQuestionScreen is rendered correctly`, () => {
    const tree = renderer.create(
        <ArtistQuestionScreen
          question = {questionArtistScreen}
          onAnswerChange = {() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});