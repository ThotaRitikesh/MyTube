export const API_KEY = "AIzaSyC3daMtZb9q5gcMNG3ot5pRHKY-u9Y0pKY";

export const YT_API_LINK =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&key=" +
  API_KEY;

export const YT_SUGGESTIONS =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY +
  "&id=";

export const RELATED_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=17&type=video&key=" +
  API_KEY +
  "&relatedToVideoId=";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  API_KEY +
  "&videoId=";

export const SEARCH_TEXT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
  API_KEY +
  "&q=";

  export const SHORTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoDuration=short&key=" +
  API_KEY +
  "&q=trendingshorts";