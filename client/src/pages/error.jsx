import React from 'react';

const Error = (() => {

  return (
    <>
      <div className="max-w-5xl bg-gray-300 flex flex-col justify-start items-center rounded-lg p-6">
        <strong className="text-3xl font-bold">Error 404</strong>
        <hr className="border-gray-600 border w-full mb-2" />
        <p className="text-lg text-left">
          Page not found!
        </p>
      </div>
    </>
  );

});

export { Error };