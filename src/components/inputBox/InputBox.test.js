import React from "react";
import { shallow } from "enzyme";
import InputBox from "./InputBox";
import InputBase from "@material-ui/core/InputBase";
import { checkIfMatchSnapshot, checkPropTypes } from "../../utils/tests";

const props = {
  handleChange: jest.fn(),
  handleSubmit: jest.fn(),
  inputValue: "test-string"
};

describe("<InputBox/>", () => {
  const wrapper = shallow(<InputBox {...props} />).dive();

  it("onChange should call handleChange with args", () => {
    wrapper.find(InputBase).simulate("change", "change-test");

    expect(props.handleChange.mock.calls[0][0]).toBe("change-test");
  });

  it("onSubmit should call handleSubmit with args", () => {
    wrapper.find("form").simulate("submit", "submit-test");

    expect(props.handleSubmit.mock.calls[0][0]).toBe("submit-test");
  });

  it("<input/> value should be same as inputValue", () => {
    expect(wrapper.find(InputBase).props().value).toBe("test-string");
  });

  checkIfMatchSnapshot(<InputBox {...props} />);
  checkPropTypes(InputBox, props);
});
