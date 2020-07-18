import React from "react";
import PropTypes from "prop-types";
import renderer from "react-test-renderer";
import withAudio from "./with-audio";


const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAudio(MockComponent);

describe(`Test withAudio component`, () => {
  test(`withAudio is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        id={`id-1`}
        src={`src-1`}
        isPlaying={false}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
