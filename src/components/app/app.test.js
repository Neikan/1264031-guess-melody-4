import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {questionGenre, questionArtist} from "../../consts/test-data.js";


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
        questionGenre = {questionGenre}
        questionArtist = {questionArtist}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
