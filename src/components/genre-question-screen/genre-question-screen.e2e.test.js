import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import {questionGenre} from "../../consts/test-data.js";


configure({
  adapter: new Adapter()
});


describe(`Test e2e GenreQuestionScreen component`, () => {
  test(`When user answers genre question form is not sent`, () => {
    const handleFormSubmit = jest.fn();

    const genreQuestion = shallow(
        <GenreQuestionScreen
          question={questionGenre}
          answers={[]}
          renderPlayer={() => {}}
          onFormSubmit={handleFormSubmit}
          onAnswerChange={() => {}}
        />
    );

    const formSendPrevention = jest.fn();

    genreQuestion.find(`form`).simulate(`submit`, {
      preventDefault: formSendPrevention
    });

    expect(formSendPrevention).toHaveBeenCalledTimes(0);
    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  });


  test(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const handleAnswerChange = jest.fn((...args) => [...args]);
    const userAnswerId = questionGenre.answers[1].id;
    const userAnswerChoices = [false, true, false, false];

    const genreQuestion = mount(
        <GenreQuestionScreen
          question={questionGenre}
          answers={[userAnswerId]}
          renderPlayer={() => {}}
          onFormSubmit={() => {}}
          onAnswerChange={handleAnswerChange}
        />
    );

    genreQuestion.find(`input`).at(1).simulate(`change`, {checked: true});

    genreQuestion.find(`form`).simulate(`submit`, {
      preventDefault() {}
    });

    expect(handleAnswerChange).toHaveBeenCalledTimes(1);

    expect(
        genreQuestion.find(`input`).map((input) => input.prop(`checked`))
    ).toEqual(userAnswerChoices);
  });
});
