import React, { useEffect, useState } from "react";
import { SEARCH_TEXT_API, YT_API_LINK } from "../utiles/constant.js";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDetails } from "../utiles/videoInfo.js";
import Shimmer from "./Shimmer.js";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { text } = useSelector((store) => store.details);

  // console.log(text);
  // console.log(searchText);

  const dispatch = useDispatch();

  useEffect(() => {
    setSearchText(text);
    // fetchVideos();
  }, [text]);

  useEffect(() => {
    if (searchText === "") {
      fetchVideos();
    } else {
      fetchSearch();
    }
    // eslint-disable-next-line
  }, [searchText]);

  const fetchVideos = async () => {
    const data = await fetch(YT_API_LINK);
    const json = await data.json();
    setVideos(json?.items);
  };

  const fetchSearch = async () => {
    const data = await fetch(SEARCH_TEXT_API + searchText);
    const json = await data.json();
    setVideos(json?.items);
  };

  return videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap ">
      {videos?.map((video) => (
        <Link
          to={"/watch?v=" + (searchText === "" ? video.id : video.id.videoId)}
          onClick={() =>
            dispatch(
              addDetails(searchText === "" ? video.id : video.id.videoId)
            )
          }
          key={searchText === "" ? video.id : video.id.videoId}
          value={searchText === "" ? video.id : video.id.videoId}
        >
          <Card videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
