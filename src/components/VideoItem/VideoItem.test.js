import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import { shallow } from "enzyme";
import VideoItem from "./VideoItem";

describe("<VideoItem/>", () => {
  const props = {
    imgUrl: "test-g6373.img",
    title: "test-title-1245766",
    channelTitle: "test-channel-76478347834",
    index: 1,
    changeMainVideo: jest.fn()
  };

  const wrapper = shallow(<VideoItem {...props} />).dive();

  it("should render a video thumbnail", () => {
    expect(
      wrapper.containsMatchingElement(<img src="test-g6373.img" />)
    ).toBeTruthy();
  });

  it("should render the video title", () => {
    expect(wrapper.contains("test-title-1245766")).toBeTruthy();
  });

  it("should render the channel title", () => {
    expect(wrapper.contains("test-channel-76478347834")).toBeTruthy();
  });

  it("should call changeMainVideo function, and pass an index number as the arg in it when clicked", () => {
    const shallowWrapper = wrapper.find('[data-test="button"]');
    shallowWrapper.simulate("click");

    expect(props.changeMainVideo.mock.calls[0][0]).toBe(1);
  });

  checkIfMatchSnapshot(<VideoItem {...props} />);
});
