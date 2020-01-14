import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import { shallow } from "enzyme";
import NavBar from "./NavBar";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SearchVideos from "../SearchVideos/SearchVideos";
import LinearProgress from "@material-ui/core/LinearProgress";

describe("<NavBar/>", () => {
  const props = {
    onSearchSubmit: jest.fn(),
    loading: false
  };
  const wrapper = shallow(<NavBar {...props} />).dive();

  it("should render the YouTube icon", () => {
    expect(wrapper.find(YouTubeIcon)).toHaveDisplayName("YouTubeIcon");
  });

  it("should render an app title", () => {
    expect(wrapper.contains("Youtube Videos")).toBeTruthy();
  });

  it("should render an input element", () => {
    expect(wrapper.find(SearchVideos)).toHaveProp("onSearchSubmit");
  });

  it("should not render the loading bar if loading={false}", () => {
    expect(wrapper.find(LinearProgress)).not.toExist();
  });

  it("should render the loading bar if loading={true}", () => {
    const wrapper = shallow(
      <NavBar onSearchSubmit={jest.fn()} loading={true} />
    ).dive();

    expect(wrapper.find(LinearProgress)).toExist();
  });

  checkIfMatchSnapshot(<NavBar {...props} />);
});
