import axios from "axios";
import { config } from "../config";

const url = "https://www.googleapis.com/youtube/v3/search";

export const getYoutubeVideos = async term => {
  try {
    const response = await axios.get(url, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: config.API_KEY,
        q: term
      }
    });
    // excluding playlists and channels items from returned list
    const videos = await response.data.items.filter(vid => vid.id.videoId);

    return { videos: videos, error: null };
  } catch (err) {
    return { videos: [], error: err.message };
  }
};
