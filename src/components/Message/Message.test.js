import React from "react";
import Message from "./Message";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

describe("Message component", () => {
  it("matches a snapshot", () => {
    const tree = renderer.create(<Message message={"test message"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render a message if it passed in", () => {
    const wrapper = shallow(<Message message={"test message"} />);
    const text = wrapper.find('[data-test="message"]').text();
    expect(text).toBe("test message");
  });

  it("shoud render null if no message is passed in", () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it("check prop types", () => {
    const props = {
      message: "test message"
    };
    const result = checkPropTypes(
      Message.propTypes,
      props,
      "prop",
      Message.name
    );
    expect(result).toBe(undefined);
  });
});
