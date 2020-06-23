import React from "react";
import {configure, shallow} from "enzyme";
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
          question = {questionGenre}
          onFormSubmit = {handleFormSubmit}
        />
    );

    const formSendPrevention = jest.fn();

    genreQuestion.find(`form`).simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(handleFormSubmit).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });


  // test(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
  //   const handleFormSubmit = jest.fn((...args) => [...args]);
  //   const userAnswers = [false, true, false, false];
  //   const userAnswerId = [questionGenre.answers[1].id];

  //   const genreQuestion = shallow(
  //       <GenreQuestionScreen
  //         question = {questionGenre}
  //         onFormSubmit = {handleFormSubmit}
  //       />
  //   );

  //   genreQuestion.find(`input`).at(1).simulate(`change`, {
  //     target: {checked: true}
  //   });

  //   genreQuestion.find(`form`).simulate(`submit`, {
  //     preventDefault() {}
  //   });

  //   expect(handleFormSubmit).toHaveBeenCalledTimes(1);
  //   expect(handleFormSubmit.mock.calls[0][0]).toMatchObject(questionGenre);
  //   // expect(handleFormSubmit.mock.calls[0][0]).toMatchObject(userAnswerId);
  //   expect(
  //       genreQuestion.find(`input`).map((input) => input.prop(`checked`))
  //   ).toEqual(userAnswers);
  // });
});
