import React from "react";
import Message from "./Message";
import { shallow } from "enzyme";
import { checkIfMatchSnapshot, checkPropTypes } from "../../utils/tests";

describe("<Message/>", () => {
  const props = {
    message: "test-string"
  };

  it("should render a message if it passed in as a prop", () => {
    const wrapper = shallow(<Message message={"test-message-DF5GT"} />);

    expect(wrapper.contains("test-message-DF5GT")).toBeTruthy();
  });

  it("shoud not render an empty component if no props are passed in", () => {
    const wrapper = shallow(<Message />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  checkIfMatchSnapshot(<Message message={"message"} />);
  checkPropTypes(Message, props);
});
