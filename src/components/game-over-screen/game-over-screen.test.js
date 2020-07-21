import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./game-over-screen.jsx";

test(`Should GameOverScreen render correctly`, () => {
  const tree = renderer
    .create(
        <GameOverScreen
          onGameStart={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
