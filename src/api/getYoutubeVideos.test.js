import { getYoutubeVideos } from "./getYoutubeVideos";
import axios from "axios";

jest.mock("axios");

describe("async getYoutubeVideos function", () => {
  it("should be called with correct arguments", async () => {
    await getYoutubeVideos("test-query-FG67GH");
    expect(axios.get.mock.calls[0][0]).toBe(
      "https://www.googleapis.com/youtube/v3/search"
    );
    expect(axios.get.mock.calls[0][1].params.q).toBe("test-query-FG67GH");
  });

  it("should return an object with data", async () => {
    const data = {
      data: {
        items: [
          {
            id: {
              videoId: "123"
            }
          },
          {
            id: {
              videoId: "45"
            }
          }
        ]
      }
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    const results = await getYoutubeVideos();

    expect(results).toEqual({
      videos: [
        {
          id: {
            videoId: "123"
          }
        },
        {
          id: {
            videoId: "45"
          }
        }
      ],
      errorMessage: null
    });
  });

  it("should simulate an error and return an object", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject("error"));
    const results = await getYoutubeVideos();

    expect(results).toEqual({
      videos: [],
      errorMessage:
        "Something went wrong, please try again later.  Error: undefined"
    });
  });
});
