import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ButtonList from "./ButtonList";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Body = () => {
  const list = [
    "T-series",
    "akshay saini",
    "Music",
    "Trending",
    "Cricket",
    "Live",
    "Sports",
    "Gaming",
    "Computer Science",
    "Trailers",
  ];

  const list1 = [
    "Mixes",
    "Jukebox",
    "Kedarnath",
    "Arijith Singh",
    "CSS",
    "Tourist destination",
    "Lionel Messi",
    "India national cricket team ",
  ];

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div>
          <Carousel
            infiniteLoop
            showIndicators={false}
            showThumbs={false}
            className=" mt-20 h-12"
          >
            <ButtonList list={list} />
            <ButtonList list={list1} />
          </Carousel>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
