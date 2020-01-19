import React from "react";
import { shallow } from "enzyme";
import SearchVideos from "./SearchVideos";
import SearchContainer from "../SearchContainer/SearchContainer";
import InputBox from "../InputBox/InputBox";
import { checkIfMatchSnapshot, checkPropTypes } from "../../utils/tests";

describe("<SearchVideos/>", () => {
  const wrapper = shallow(<SearchVideos onSearchSubmit={() => {}} />);

  it("should have one <SearchContainer/> component", () => {
    expect(wrapper.find(SearchContainer).length).toBe(1);
  });

  it("should have one <InputBox/>", () => {
    const innerWrapper = wrapper.dive();
    expect(innerWrapper.find(InputBox).length).toBe(1);
  });

  checkIfMatchSnapshot(<SearchVideos onSearchSubmit={() => {}} />);
  checkPropTypes(SearchVideos, { onSearchSubmit: () => {} });
});
