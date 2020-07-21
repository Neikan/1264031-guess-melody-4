import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {questionGenre} from "../../consts/test-data.js";
import AudioPlayer from "./audio-player.jsx";


configure({
  adapter: new Adapter()
});


describe(`Test e2e AudioPlayer component`, () => {
  test(`Starts playing the song`, () => {
    const handlePlayTrack = jest.fn();
    const {id, src} = questionGenre.answers[0];

    const audioPlayer = mount(
        <AudioPlayer
          id={id}
          src = {src}
          isLoading = {true}
          isPlaying = {false}
          onPlayTrack = {handlePlayTrack}
        >
          <audio />
        </AudioPlayer>
    );

    audioPlayer.find(`.track__button`).simulate(`click`, handlePlayTrack());

    expect(handlePlayTrack.mock.calls.length).toBe(1);
    expect(handlePlayTrack).toHaveBeenCalledTimes(1);
  });
});
