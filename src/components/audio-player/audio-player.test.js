import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';
import {questionArtist} from '../../consts/test-data.js';


describe(`Test AudioPlayer component`, () => {
  test(`AudioPlayer is rendered correctly`, () => {
    const {song} = questionArtist;

    const tree = renderer.create(<AudioPlayer
      isPlaying = {false}
      onPlayButtonClick = {() => {}}
      src = {song.src}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
