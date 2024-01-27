/* eslint-disable no-template-curly-in-string */
import axios from "axios";
import constants from "../constants";

const getYouTubeMetadata = async (videoUrl: string) => {
  const extractVideoId = (url: string) => {
    // Extract video ID from various YouTube URL formats
    const match = url.match(/[?&]v=([^#&?]+)/);
    return match ? match[1] : null;
  };

  try {
    const videoId: any = extractVideoId(videoUrl);

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; ;
    console.log('====================================');
    console.log(apiKey);
    console.log('====================================');
    if (apiKey)
    {

    
      const apiUrl1 = constants.youtube_video_url
        .replace("${videoId}", videoId)
        .replace("${apiKey}", apiKey);

    const response = await axios.get(apiUrl1);

    if (response?.data?.items?.length > 0) {
      const snippet = response.data.items[0].snippet;
      const statistics = response.data.items[0].statistics;
      const channelId = response.data.items[0]?.snippet?.channelId;

      if (channelId) {
        const apiUrl2 = constants.youtube_channel_url
          .replace("${channelId}", channelId)
          .replace("${apiKey}", apiKey);
        const channelResponse = await axios.get(apiUrl2);

        console.log("============channelId========================");
        console.log(channelResponse);
        console.log("====================================");
        const subscriberCount =
          channelResponse.data.items[0]?.statistics?.subscriberCount;

        let data = {
          title: snippet.title,
          youtubeUrl: videoUrl,
          videoUrl: videoUrl,
          description: snippet.description,
          thumbnail: snippet.thumbnails.default.url,
          views: statistics.viewCount || 0,
          likes: statistics.likeCount || 0,
          subscriberCount: subscriberCount || 0,
          comments: statistics.commentsCount || 0,
          updatedOn: snippet.publishedAt,
        };
        return data;
      }
    } else {
      // Handle case when no video is found
      console.error("Sorry error fetching YouTube video metadata:");
    }
  } }catch (error) {
    console.error("Error fetching YouTube video metadata:", error);
  }
};

export default getYouTubeMetadata;
