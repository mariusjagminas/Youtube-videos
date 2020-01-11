import axios from "axios";

const url = "https://www.googleapis.com/youtube/v3/search";
const errMessage1 = "No videos were found, please try another search";
const errMessage2 = "Something went wrong, please try again later.";

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
    // returns videos array,removes playlists and channels.
    const videos = await response.data.items.filter(vid => vid.id.videoId);

    return {
      videos: videos,
      errorMessage: videos.length === 0 ? errMessage1 : null
    };
  } catch (err) {
    return {
      videos: [],
      errorMessage: `${errMessage2}  Error: ${err.message}`
    };
  }
};
