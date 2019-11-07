import React from "react";
import Message from "./Message";
import renderer from "react-test-renderer";

describe("Message component", () => {
  it("match snapshot then it's redered", () => {
    const tree = renderer.create(<Message message={"test message"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
