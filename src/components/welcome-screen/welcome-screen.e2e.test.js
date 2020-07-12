import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";
import {GameConfig} from "../../consts/test-data";


configure({
  adapter: new Adapter(),
});


test(`Should welcome button be pressed`, () => {
  const handleGameStart = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsMaxCount={GameConfig.ERRORS_MAX_COUNT}
        onGameStart={handleGameStart}
      />
  );

  welcomeScreen.find(`button.welcome__button`).props().onClick();

  expect(handleGameStart.mock.calls.length).toBe(1);
});
