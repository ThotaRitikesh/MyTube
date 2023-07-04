import React, { useEffect, useState } from "react";
import { YT_API_LINK } from "../helper/constant.js";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDetails } from "../store/reducers/videoInfo.js";
import Shimmer from "./Shimmer.js";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YT_API_LINK);
    const json = await data.json();
    setVideos(json?.items);
  };

  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center ">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + video.id}
          onClick={() => dispatch(addDetails(video.id))}
          key={video.id}
          value={video.id}
        >
          <Card videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
