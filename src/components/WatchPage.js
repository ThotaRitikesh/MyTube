import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { closetoggle } from "../utiles/appToggle";
import RelatedSuggestions from "./RelatedSuggestions";
import { COMMENTS_API, SEARCH_BY_ID } from "../utiles/constant";
import CommentsCard from "./CommentsCard";
import { addDetails } from "../utiles/videoInfo";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [movieId, setMovieId] = useState(searchParams.get("v"));
  const [videoInfo, setVideoInfo] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [comments, setComments] = useState([]);
  const { id } = useSelector((store) => store.details);

  const dispatch = useDispatch();

  useEffect(() => {
    setMovieId(searchParams.get("v"));
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    setMovieId(searchParams.get("v"));
    dispatch(closetoggle());
    dispatch(addDetails(movieId));
    movieDetailsById();
    getComments();
    // eslint-disable-next-line
  }, [movieId]);

  const movieDetailsById = async () => {
    const data = await fetch(SEARCH_BY_ID + movieId);
    const json = await data.json();
    setVideoInfo(json?.items[0]?.snippet);
  };

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + movieId);
    const json = await data.json();
    setComments(json?.items);
  };

  return (
    <div className="flex my-14">
      <div className="m-2 p-3 mx-24 my-5 w-[600px]">
        <iframe
          width="600"
          height="300"
          src={"https://www.youtube.com/embed/" + movieId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-xl py-2 ">{videoInfo?.title}</h1>
        <div
          className={
            " bg-gray-100 shadow-lg rounded-2xl" +
            (showDescription ? " h-auto " : " h-28 overflow-hidden ")
          }
        >
          <h1 className="font-bold p-2 ">Description : </h1>
          <div className="border border-gray-300 "></div>
          <h3
            className="p-2 font-semibold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show less" : "Show more"}
          </h3>
          <p className="p-2 ">{videoInfo?.description}</p>
        </div>
        <div className="border border-gray-300 my-4 "></div>
        <div>
          <h1 className="font-bold p-2">Comments : </h1>
          {comments?.map((comments) => (
            <CommentsCard comments={comments} key={comments.id} />
          ))}
        </div>
      </div>
      <div>
        <RelatedSuggestions />
      </div>
    </div>
  );
};

export default WatchPage;
