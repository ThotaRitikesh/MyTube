import React from "react";

const Shimmer = () => {
  return (
    <div className="p-1 mx-1 my-4 shadow-sm  flex flex-wrap ">
      {Array(9)
        .fill("")
        .map((i) => (
          <div
            key={i}
            className="rounded-xl w-80 bg-gray-200 h-80 m-2 dark:bg-gray-800"
          />
        ))}
    </div>
  );
};

export default Shimmer;
