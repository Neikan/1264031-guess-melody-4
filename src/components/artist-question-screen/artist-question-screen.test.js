import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import {questionArtist} from '../../consts/test-data.js';


describe(`Test ArtistQuestionScreen component`, () => {
  test(`ArtistQuestionScreen is rendered correctly`, () => {
    const tree = renderer.create(
        <ArtistQuestionScreen
          question={questionArtist}
          onGameEnd={() => {}}
          renderPlayer={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
