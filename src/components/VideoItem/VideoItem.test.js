import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import { shallow } from "enzyme";
import VideoItem from "./VideoItem";
import td from "testdouble";

describe("VideoItem component", () => {
  const props = {
    imgUrl: "test-g6373.img",
    title: "test-title-1245766",
    channelTitle: "test-channel-76478347834",
    index: 1,
    changeMainVideo: td.func()
  };

  checkIfMatchSnapshot(<VideoItem {...props} />);
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<VideoItem {...props} />).dive();
  });

  it("should render an image", () => {
    const isFound = wrapper.containsMatchingElement(
      <img src="test-g6373.img" />
    );
    expect(isFound).toBeTruthy();
  });

  it("should render a title", () => {
    const isFound = wrapper.contains("test-title-1245766");
    expect(isFound).toBeTruthy();
  });

  it("should render a chanel title", () => {
    const isFound = wrapper.contains("test-channel-76478347834");
    expect(isFound).toBeTruthy();
  });

  it("on click should call passed funtion, and pass index as an argument to that function", () => {
    const shallowWrapper = wrapper.find('[data-test="button"]');
    shallowWrapper.simulate("click");
    td.verify(props.changeMainVideo(1));
  });
});
