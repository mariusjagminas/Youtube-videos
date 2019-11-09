import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import { shallow } from "enzyme";
import MainVideo from "./MainVideo";

describe("MainVideo component", () => {
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

  it("should render  video", () => {
    const isIframeFound = wrapper.containsMatchingElement(
      <iframe src="https://www.youtube.com/embed/GHJ6899GHR" />
    );
    expect(isIframeFound).toBeTruthy();
  });

  it("should render the video title", () => {
    const isTitleFound = wrapper.contains("test-title-83893HG");
    expect(isTitleFound).toBeTruthy();
  });

  it("should render the video description ", () => {
    const isDescriptionFound = wrapper.contains("test-description-JGH7688");
    expect(isDescriptionFound).toBeTruthy();
  });

  it("should render date in correct format", () => {
    const dateString = wrapper.find('[test-data="videoDate"]').text();
    expect(dateString).toBe("Dec 10 2018");
  });
});
