import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen.jsx";
import {GameType} from "../../consts/test-data.js";


const children = <div className="children-component" />;

describe(`Test GameScreen component`, () => {
  test(`GameScreen component is created and rendered correctly with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          type = {GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  test(`GameScreen component is created and rendered correctly with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          type = {GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
