import React from "react";
import { checkIfMatchSnapshot } from "../../utils/tests";
import VideoItem from "./VideoItem";

describe("VideoItem component", () => {
  const props = {
    imgUrl: "test.img",
    title: "test-title",
    channelTitle: "test-channel",
    index: 1,
    changeMainVideo: () => {}
  };

  checkIfMatchSnapshot(<VideoItem {...props} />);
});
