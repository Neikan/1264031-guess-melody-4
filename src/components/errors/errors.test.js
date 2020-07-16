import React from "react";
import renderer from "react-test-renderer";
import Errors from "./errors.jsx";

describe(`Should Errors render correctly`, () => {
  test(`No errors`, () => {
    const tree = renderer
      .create(
          <Errors
            count={0}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test(`With one error`, () => {
    const tree = renderer
      .create(
          <Errors
            count={1}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
