import axios from "axios";

const url = "https://www.googleapis.com/youtube/v3/search";

export const getYoutubeVideos = async term => {
  try {
    const response = await axios.get(url, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: process.env.REACT_APP_YOUTUBE_KEY,
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
