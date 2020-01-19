import React from "react";
import { checkIfMatchSnapshot, checkPropTypes } from "../../utils/tests";
import { shallow } from "enzyme";
import VideoList from "./VideosList";
import VideoItem from "../VideoItem/VideoItem";

const props = {
  videos: [
    {
      id: {
        videoId: "id-test"
      },
      snippet: {
        title: "test-title",
        channelTitle: "test-title",
        thumbnails: {
          medium: {
            url: "http://test-url"
          }
        }
      }
    },
    {
      id: {
        videoId: "id-test-2"
      },
      snippet: {
        title: "test-title",
        channelTitle: "test-title",
        thumbnails: {
          medium: {
            url: "http://test-url"
          }
        }
      }
    }
  ],
  changeMainVideo: jest.fn()
};

describe("<VideoList/>", () => {
  const wrapper = shallow(<VideoList {...props} />).dive();

  it("should render 2 <VideoItem/> components", () => {
    expect(wrapper).toContainMatchingElements(2, VideoItem);
  });

  checkIfMatchSnapshot(<VideoList {...props} />);
  checkPropTypes(VideoList, props);
});
