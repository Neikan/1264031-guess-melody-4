import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {questions} from "../../consts/test-data.js";


describe(`Test App component`, () => {
  test(`App component is created and rendered correctly`, () => {
    const tree = renderer
      .create(<App
        errorsCount={3}
        questions={questions}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
