import React from "react";
// import UploadTimeCalculator from './UploadTimeCalculator';
import cropTitle from "../helper/cropTitle";
import formatViewCount from "../helper/formatViewCount";
import uploadTime from "../helper/uploadTime";

const Card = ({ videos }) => {
  const viewCount = videos?.statistics?.viewCount;
  const formattedViewCount = formatViewCount(viewCount ? viewCount : "N/A");

  const title = videos?.snippet?.title;
  const maxLength = 85;
  const croppedTitle = cropTitle(title, maxLength);

  const publishedAt = videos?.snippet?.publishedAt;
  const timeSincePublished = uploadTime(publishedAt);

  return (
    <div className="p-1 mx-1 my-4 shadow-sm w-[360px]">
      <img
        alt="thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
        className="rounded-xl w-[360px] hover:rounded-none"
      />
      <h1 className="font-bold my-2">{croppedTitle}</h1>
      <h3>{videos?.snippet?.channelTitle}</h3>
      <div className="flex justify-start">
        <h5 className="mr-2">{formattedViewCount} Views.</h5>
        {timeSincePublished}
      </div>
    </div>
  );
};

export default Card;
