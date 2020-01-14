import React from "react";
import { mount } from "enzyme";
import Search from "./Search";

const spyFunction = jest.fn();

describe("<Search/>", () => {
  const wrapper = mount(
    <Search onSearchSubmit={spyFunction}>
      {(handleChange, handleSubmit, inputValue) => (
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={handleChange} />
        </form>
      )}
    </Search>
  );

  it("state's [inputValue] should be an empty string", () => {
    expect(wrapper.state("inputValue")).toBe("");
  });

  it("on change should set [inputValue] with the entered value", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "test-string" }
    });

    expect(wrapper.state("inputValue")).toBe("test-string");
  });

  it("<input/> prop 'value' should match [inputValue] value", () => {
    expect(wrapper.find("input").props().value).toBe("test-string");
  });

  it("on submit should call the fuction with a valid args, and reset [inputValue] to an empty string", () => {
    wrapper.find("form").simulate("submit");

    expect(spyFunction.mock.calls[0][0]).toBe("test-string");
    expect(wrapper.state("inputValue")).toBe("");
  });
});
