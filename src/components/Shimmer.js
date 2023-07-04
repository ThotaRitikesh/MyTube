import React from "react";

const number=[1,2,3,4,5,6,7,8,9];

const Shimmer = () => {
  return (
    <div className="p-1 mx-24 my-5 shadow-sm  flex flex-wrap ">
      {number
        .map((e) => (
          <div
            key={e}
            className="rounded-xl w-80 bg-gray-200 h-80 m-2 dark:bg-gray-800"
          />
        ))}
    </div>
  );
};

export default Shimmer;
