import axios from "axios";
import { config } from "../config";

const url = "https://www.googleapis.com/youtube/v3/search";

export const getSearchData = async term => {
  try {
    const response = await axios.get(url, {
      params: {
        part: "snippet",
        maxResults: 5,
        key: config.API_KEY,
        q: term
      }
    });
    return response.data.items;
  } catch {}
};

// https://www.youtube.com/embed/ video id
