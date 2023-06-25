import React from "react";
import { addDetails } from "../utiles/videoInfo";
import { useDispatch } from "react-redux";
import cropTitle from "../helper/cropTitle";
import uploadTime from "../helper/uploadTime";

const SuggestionCard = ({ videos }) => {
  const dispatch = useDispatch();
  const title = videos?.snippet?.title;
  const maxLength = 40;
  const croppedTitle = cropTitle(title, maxLength);
  const publishedAt = videos?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);

  return (
    <div
      className="p-2 m-2 flex w-auto "
      onClick={() => dispatch(addDetails(videos.id.videoId))}
    >
      <img
        alt="thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
        className="rounded-xl w-52 h-28"
      />
      <div className="px-2">
        <h1 className="font-bold my-2">{croppedTitle}</h1>
        <h3>{videos?.snippet?.channelTitle}</h3>
        <h5>{timeSincePublished}</h5>
      </div>
    </div>
  );
};

export default SuggestionCard;
