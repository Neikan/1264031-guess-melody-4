import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withUserAnswer from "./with-user-answer.js";
import {questionGenre} from "../../consts/test-data.js";


configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withUserAnswer(MockComponent);


describe(`Test e2e withUserAnswer component`, () => {
  test(`Should change answers`, () => {
    const tree = shallow(
        <MockComponentWrapped
          question={questionGenre}
          onGameArtistStage={() => {}}
          renderPlayer={() => {}}
        />
    );

    expect(tree.props().answers).toEqual([]);

    tree.props().onAnswerChange(questionGenre.answers[0].id);
    expect(tree.props().answers).toEqual([questionGenre.answers[0].id]);

    tree.props().onAnswerChange(questionGenre.answers[0].id);
    expect(tree.props().answers).toEqual([]);

    tree.props().onAnswerChange(questionGenre.answers[1].id);
    expect(tree.props().answers).toEqual([questionGenre.answers[1].id]);
  });
});
