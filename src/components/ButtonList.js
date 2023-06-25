import React from "react";

const list = [
  "All",
  "Music",
  "Love Songs",
  "Cricket",
  "Live",
  "Sports",
  "Gaming",
  "Computer Science",
  "Trailers",
  "New  to you",
];

const ButtonList = () => {
  return (
    <div className="mt-16 mx-4">
      {list.map((list, index) => (
        <button
          key={index}
          className="bg-gray-100 px-4 m-1 w-auto h-9 rounded-xl"
        >
          {list}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
