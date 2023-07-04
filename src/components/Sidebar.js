import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.toggle_app.isMenuOpen);

  return isMenuOpen ? (
    <div className="shadow-lg bg-fixed my-20 px-4 w-28 dark:shadow-white ">
      <ul className="overflow-hidden">
        <li className="flex justify-center my-2  hover:bg-gray-100  dark:hover:bg-gray-800">
          <Link to="/">
            <span className="material-symbols-outlined p-1 font-thin">
              Home
            </span>
            <span className="p-1 text-sm">Home</span>
          </Link>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">movie</span>
          <Link to="/shorts">
            <span className="p-1 text-sm">Shorts</span>
          </Link>
        </li>
        <li className="flex justify-center  hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            subscriptions
          </span>
          <span className="p-1  text-sm">Subs...</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            video_library
          </span>
          <span className="p-1  text-sm">Library</span>
        </li>
      </ul>
      <div className="border border-gray-100 my-4 "></div>
      <ul className="overflow-hidden">
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            history
          </span>
          <span className="p-1  text-sm ">History</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            thumb_up
          </span>
          <span className="p-1 mr-3 text-sm">Liked</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1  font-thin">pace</span>
          <span className="p-1 mr-3 text-sm">Watch</span>
        </li>
        <li className="flex justify-center my-2 hover:bg-gray-100  dark:hover:bg-gray-800">
          <span className="material-symbols-outlined p-1 font-thin">
            settings
          </span>
          <span className="p-1 mr-2 text-sm">Settings</span>
        </li>
      </ul>
      <div className="border border-gray-100 my-4 "></div>
    </div>
  ) : null;
};

export default Sidebar;
