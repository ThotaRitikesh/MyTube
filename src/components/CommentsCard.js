import React from "react";

const CommentsCard = ({ comments }) => {
  return (
    <div className="p-2 m-2 flex  w-[600px] overflow-hidden ">
      <img
        alt="profile"
        src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        className="rounded-full h-10 my-1"
      />
      <div className="px-4">
        <h1 className="font-semibold">
          @{comments?.snippet?.topLevelComment?.snippet?.authorDisplayName}
        </h1>
        <h3>{comments?.snippet?.topLevelComment?.snippet?.textDisplay}</h3>
      </div>
    </div>
  );
};

export default CommentsCard;
