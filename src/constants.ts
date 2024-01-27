/* eslint-disable no-template-curly-in-string */
const constants = {
  youtube_video_url:
    "https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics",
  youtube_channel_url:
    "https://www.googleapis.com/youtube/v3/channels?id=${channelId}&key=${apiKey}&part=snippet,statistics",
  backend_url: "https://toptube-backend.onrender.com/api/",

  api_get_allvideos: "all-videos",
  api_post_addvideo: "add-video",
};

export default constants;
