import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div className='flex flex-col justify-center align-middle content-center w-full'>
      <h1 className='font-bold red mx-72 p-2 bg-red-600 text-4xl'>Youtube Api key got expired.</h1>
      <h2  className='font-semibold  mx-72 p-2 text-xl'>please let the developer know.</h2>
      <h1>{error.status}</h1>
    </div>
  );
}

export default ErrorPage;
