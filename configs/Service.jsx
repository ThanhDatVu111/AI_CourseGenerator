const { default: axios } = require("axios");

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";

const getVideos = async (query) => {
  const params = {
    part: "snippet",
    q: query,
    maxResults: 1,
    type: "video",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  const resp = await axios.get(YOUTUBE_BASE_URL + "/search", { params });

  return resp.data.items;
};

//YouTube API returns items as an array of video results. Even though we set maxResults: 1, 
//it still returns an array - just with one item. 

export default {
  getVideos,
};
