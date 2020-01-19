import React from "react";
import { mount } from "enzyme";
import App from "./App";
import NavBar from "../NavBar/NavBar";
import Message from "../Message/Message";
import MainVideo from "../MainVideo/MainVideo";
import { stateNoVideos, stateVideosFound } from "./mockStates";
import VideoItem from "../VideoItem/VideoItem";

describe("<App/>", () => {
  const appWrapper = mount(<App />);

  it("always renders <NavBar/>", () => {
    expect(appWrapper.find(NavBar).length).toBe(1);
  });

  describe("on initial load", () => {
    it("should render an empty <Message/>", () => {
      expect(appWrapper.find(Message)).toBeEmptyRender();
    });

    it("should not render <MainVideo/>", () => {
      expect(appWrapper.find(MainVideo).length).toBe(0);
    });

    it("prop `loading' passed down into <NavBar/> should be set to `true`", () => {
      expect(appWrapper.find(NavBar).props().loading).toBe(true);
    });

    it("should not render any of <VideoItem/>", () => {
      expect(appWrapper.find(VideoItem).length).toBe(0);
    });
  });

  describe("if no videos found", () => {
    beforeEach(() => {
      appWrapper.setState({ ...stateNoVideos });
    });

    it("should render <Message/> with a text message", () => {
      expect(appWrapper.find(Message).length).toBe(1);
      expect(appWrapper.find(Message).text()).toBe("test-error-message");
    });

    it("should not render <MainVideo/>", () => {
      expect(appWrapper.find(MainVideo).length).toBe(0);
    });

    it("prop `loading' passed down into <NavBar/> should be set to `false`", () => {
      expect(appWrapper.find(NavBar).props().loading).toBe(false);
    });

    it("should not render <VideoItem/>", () => {
      expect(appWrapper.find(VideoItem).length).toBe(0);
    });
  });

  describe("if videos found", () => {
    beforeEach(async () => {
      await appWrapper.setState({ ...stateVideosFound });
    });

    it("should render <MainVideo/>", () => {
      expect(appWrapper.find(MainVideo).length).toBe(1);
    });

    it("<MainVideo/> should receive a correct props", () => {
      expect(appWrapper.find(MainVideo).props().currentVideo).toBe(
        appWrapper.state("currentVideo")
      );
    });

    it("should not render <Message/> ", () => {
      expect(appWrapper.find(Message).length).toBe(0);
    });

    it("prop `loading' passed down into <NavBar/> should be set to `false`", () => {
      expect(appWrapper.find(NavBar).props().loading).toBe(false);
    });

    it("should render 3 <VideoItem/>", () => {
      expect(appWrapper.find(VideoItem).length).toBe(3);
    });
  });
});
