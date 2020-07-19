import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen.jsx";

describe(`Should WinScreen render correctly`, () => {
  describe(`With 3 questions`, () => {
    test(`With 0 errors`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              errorsAnswers={0}
              onGameStart={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test(`With 1 error`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={3}
              errorsAnswers={1}
              onGameStart={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`With 2 questions`, () => {
    test(`With 0 errors`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              errorsAnswers={0}
              onGameStart={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test(`With 1 error`, () => {
      const tree = renderer
        .create(
            <WinScreen
              questionsCount={2}
              errorsAnswers={1}
              onGameStart={() => {}}
            />
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
