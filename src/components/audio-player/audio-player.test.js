import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';
import {questionArtist} from '../../consts/test-data.js';


describe(`Test AudioPlayer component`, () => {
  test(`AudioPlayer is rendered correctly`, () => {
    const {id, src} = questionArtist.song;

    const tree = renderer.create(
        <AudioPlayer
          id={id}
          src = {src}
          isLoading = {true}
          isPlaying = {false}
          onPlayTrack = {() => {}}
        >
          <audio />
        </AudioPlayer>
        , {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
