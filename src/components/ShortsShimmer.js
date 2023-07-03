import React from 'react';

const ShortsShimmer = () => {
  return (
    <div className="flex justify-center my-5">
        <div className='flex justify-center flex-col  gap-5'>
          {
            Array(5).fill("").map((i)=><div key={i} className="rounded-xl w-[300px] bg-gray-200 h-[450px] m-2 dark:bg-gray-800" />
            )
          }
    </div>
  </div>
  );
}

export default ShortsShimmer;
