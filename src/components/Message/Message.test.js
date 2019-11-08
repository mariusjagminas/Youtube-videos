import React from "react";
import Message from "./Message";
import { shallow } from "enzyme";
import { checkIfMatchSnapshot, checkPropTypes } from "../../utils/tests";

describe("Message component", () => {
  checkIfMatchSnapshot(<Message message={"message"} />);

  const props = {
    message: "string"
  };

  checkPropTypes(Message, props);

  it("should render a message if it passed in", () => {
    const wrapper = shallow(<Message message={"test-message"} />);
    const result = wrapper.contains("test-message");
    expect(result).toBe(true);
  });

  it("shoud render null if no message is passed in", () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
