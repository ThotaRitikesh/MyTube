import React, { useEffect, useState } from "react";
import { API_KEY } from "../utiles/constant";
import ShortsShimmer from "./ShortsShimmer";

const ShortsPage = () => {
  const [shorts, setShorts] = useState([]);

  useEffect(() => {
    fetchShorts();
  }, []);

  const fetchShorts = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=" +
        API_KEY +
        "&q=shorts"
    );
    const json = await data.json();
    setShorts(json.items);
  };

  return shorts.length === 0 ? (
    <ShortsShimmer />
  ) : (
    <div className="flex justify-center my-5 ">
      <div className="flex justify-center flex-col  gap-5">
        {shorts.map((s) => (
          <div className="flex" key={s?.id?.videoId}>
            <iframe
              className="rounded-3xl"
              width="290"
              height="490"
              autoFocus
              src={
                "https://www.youtube.com/embed/" +
                s?.id?.videoId +
                "?autoplay=0&mute=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col gap-10 mt-36 ml-3">
              <span className="material-symbols-outlined text-2xl bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                thumb_up
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                thumb_down
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                chat
              </span>
              <span className="material-symbols-outlined text-2xl  bg-gray-100 border rounded-full p-2 cursor-pointer  dark:bg-gray-800">
                share
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsPage;
