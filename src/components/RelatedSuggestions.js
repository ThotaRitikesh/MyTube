import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "../utiles/constant";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import { useSelector } from "react-redux";

const RelatedSuggestions = () => {
  const { id } = useSelector((store) => store.details);

  const [relatedResults, setRelatedResults] = useState([]);

  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line
  }, [id]);

  const getRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + id);
    const json = await data.json();
    setRelatedResults(json?.items);
  };

  return (
    <div className="my-5 p-2">
      {relatedResults.map((video) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          key={video?.id?.videoId}
          value={video?.id}
        >
          <SuggestionCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedSuggestions;
