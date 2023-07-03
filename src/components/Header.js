import React, { useEffect, useState } from "react";
import Hamburger from "../assets/hamburger.png";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utiles/appToggle";
import { YT_SUGGESTIONS } from "../utiles/constant";
import { cacheResults } from "../utiles/searchSlice";
import { searchText } from "../utiles/videoInfo";
import img from "../assets/IMG-1955.jpg";
import { Link } from "react-router-dom";
import Switcher from "./Switcher";
import mytube from "../assets/mytube-logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSuggestions = async () => {
    const data = await fetch(YT_SUGGESTIONS + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div
      className={
        "flex justify-between fixed w-full h-16 z-50 bg-white  dark:bg-black dark:text-white"
      }
    >
      <div className="flex">
        <img
          alt="hamburger"
          src={Hamburger}
          className="h-8 p-2 m-4 cursor-pointer dark:bg-white"
          onClick={() => dispatch(toggle())}
        />
        <Link to="/">
          <img alt="yt-logo" src={mytube} className="h-6 m-5" />
        </Link>
      </div>
      <div className=" flex">
        <div className="w-[500px] border border-gray-200 rounded-l-full p-2 my-3 shadow-md h-10  border-r-0 flex  dark:shadow-neutral-500">
          <input
            type="text"
            className="w-[500px] outline-0 px-3 dark:bg-black dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
          />
          {searchQuery !== "" && (
            <span
              className="material-symbols-outlined cursor-pointer hover:bg-gray-200 rounded-full"
              onClick={() => setSearchQuery("")}
            >
              close
            </span>
          )}
        </div>

        <div>
          <Link to={"/results?search_query=" + searchQuery}>
            <button
              type="submit"
              className="border border-gray-300 rounded-r-full my-3  p-2 bg-gray-100 w-14 h-10 shadow-md dark:bg-black dark:text-white  dark:shadow-neutral-500"
            >
              <span
                className="material-symbols-outlined font-light"
                onClick={() =>
                  dispatch(searchText(searchQuery), setShowSuggestions(false))
                }
              >
                search
              </span>
            </button>
          </Link>
        </div>

        {showSuggestions && (
          <div className="absolute bg-white w-[500px] my-14 py-1 px-3 shadow-lg rounded-lg dark:bg-black dark:text-white  dark:shadow-slate-400">
            <ul>
              <Link to={"/results?search_query=" + searchQuery}>
                {suggestions.map((s) => (
                  <div
                    className="flex hover:bg-gray-200 dark:hover:bg-gray-800"
                    key={s}
                    onClick={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                      dispatch(searchText(searchQuery));
                    }}
                  >
                    <span className="material-symbols-outlined py-1">
                      search
                    </span>

                    <li className="list-none py-1 px-2">{s}</li>
                  </div>
                ))}
              </Link>
            </ul>
          </div>
        )}
        <span className="material-symbols-outlined m-3 my-4  hover:bg-gray-200 rounded-full p-1 dark:hover:bg-gray-800">
          mic
        </span>
      </div>
      <Switcher />
      <div className="flex">
        <div>
          <span className="material-symbols-outlined font-thin m-4 hover:bg-gray-200 rounded-full p-1  dark:hover:bg-gray-800">
            auto_videocam
          </span>
          <span className="material-symbols-outlined font-thin m-4  hover:bg-gray-200 rounded-full p-1  dark:hover:bg-gray-800">
            notifications
          </span>
        </div>
        <img
          alt="user logo font-thin "
          src={img}
          className="h-11 p-2 m-2 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Header;
