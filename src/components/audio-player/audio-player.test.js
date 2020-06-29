import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';
import {questionArtist} from '../../consts/test-data.js';


describe(`Test AudioPlayer component`, () => {
  test(`AudioPlayer is rendered correctly`, () => {
    const {song} = questionArtist;

    const tree = renderer.create(
        <AudioPlayer
          id={song.id}
          src = {song.src}
          isPlaying = {false}
          onPlayTrack = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
