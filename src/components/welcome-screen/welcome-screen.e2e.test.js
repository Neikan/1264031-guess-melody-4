import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";


configure({
  adapter: new Adapter(),
});


it(`Should welcome button be pressed`, () => {
  const handleGameStart = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onGameStart={handleGameStart}
      />
  );

  welcomeScreen.find(`button.welcome__button`).props().onClick();

  expect(handleGameStart.mock.calls.length).toBe(1);
});
