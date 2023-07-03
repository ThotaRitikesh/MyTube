import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchFilter } from "../utiles/filterSlice";

const ButtonList = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <div className=" mx-4 flex flex-wrap justify-center ml-4 h-12 ">
      {list.map((list) => (
        <Link to={"/filter?s=" + list} key={list}>
          <button
            className="bg-gray-100 hover:bg-gray-300 px-4 m-1 w-auto h-9 rounded-xl focus:bg-black focus:text-white  dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-white dark:focus:text-black  dark:hover:bg-gray-600"
            onClick={() => dispatch(searchFilter(list))}
          >
            {list}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonList;
