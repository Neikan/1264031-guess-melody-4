import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";


describe(`Test Header component`, () => {
  test(`Header component is created and rendered correctly`, () => {
    const tree = renderer
      .create(
          <Header />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
