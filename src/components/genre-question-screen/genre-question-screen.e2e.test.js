import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {questionGenreScreen} from "../../consts/test-data.js";


configure({
  adapter: new Adapter()
});


describe(`Test e2e GenreQuestionScreen component`, () => {
  test(`When user answers genre question form is not sent`, () => {
    const handleAnswerChange = jest.fn();
    const genreQuestion = shallow(
        <GenreQuestionScreen
          question = {questionGenreScreen}
          onAnswerChange = {handleAnswerChange}
        />
    );

    const formSendPrevention = jest.fn();

    genreQuestion.find(`form`).simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(handleAnswerChange).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });


  test(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const handleAnswerChange = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const genreQuestion = shallow(
        <GenreQuestionScreen
          onAnswerChange = {handleAnswerChange}
          question = {questionGenreScreen}
        />
    );

    genreQuestion.find(`input`).at(1).simulate(`change`, {
      target: {checked: true}
    });

    genreQuestion.find(`form`).simulate(`submit`, {
      preventDefault() {}
    });

    expect(handleAnswerChange).toHaveBeenCalledTimes(1);
    expect(handleAnswerChange.mock.calls[0][0]).toMatchObject(questionGenreScreen);
    expect(handleAnswerChange.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genreQuestion.find(`input`).map((input) => input.prop(`checked`))
    ).toEqual(userAnswer);
  });
});
