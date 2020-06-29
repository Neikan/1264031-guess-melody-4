import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questionArtist} from "../../consts/test-data.js";


configure({
  adapter: new Adapter()
});


const mockEvent = {
  preventDefault() {}
};


describe(`Test e2e ArtistQuestionScreen component`, () => {
  test(`Click on user answer should pass to the callback
        data-object from which this answer was created`, () => {
    const userAnswer = questionArtist.answers[0];

    const handleGameEnd = jest.fn();

    const screen = shallow(
        <ArtistQuestionScreen
          question={questionArtist}
          onGameEnd={handleGameEnd}
          renderPlayer={() => {}}
        />
    );

    screen.find(`input`).at(0).simulate(`change`, mockEvent);

    expect(handleGameEnd).toHaveBeenCalledTimes(1);

    expect(handleGameEnd.mock.calls[0][0]).toMatchObject(questionArtist);
    expect(handleGameEnd.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});
