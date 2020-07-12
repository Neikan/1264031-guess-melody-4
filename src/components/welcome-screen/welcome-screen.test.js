import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";
import {GameConfig} from "../../consts/test-data.js";


test(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsMaxCount={GameConfig.ERRORS_MAX_COUNT}
      onGameStart={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
