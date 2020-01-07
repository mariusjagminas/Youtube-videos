import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import { shallow } from "enzyme";
import MainVideo from "./MainVideo";

describe("<MainVideo/>", () => {
  const props = {
    id: { videoId: "GHJ6899GHR" },
    snippet: {
      title: "test-title-83893HG",
      description: "test-description-JGH7688",
      publishedAt: "2018-12-10T14:13:40.000Z"
    }
  };

  checkIfMatchSnapshot(<MainVideo currentVideo={props} />);

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainVideo currentVideo={props} />).dive();
  });

  it("should render <iframe/> element", () => {
    expect(
      wrapper.containsMatchingElement(
        <iframe src="https://www.youtube.com/embed/GHJ6899GHR" />
      )
    ).toBeTruthy();
  });

  it("should render the video title", () => {
    expect(wrapper.contains("test-title-83893HG")).toBeTruthy();
  });

  it("should render the video description ", () => {
    expect(wrapper.contains("test-description-JGH7688")).toBeTruthy();
  });

  it("should render date in correct format", () => {
    expect(wrapper.contains("Dec 10 2018")).toBeTruthy();
  });
});
