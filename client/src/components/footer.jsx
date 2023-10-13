import React from "react";

const Footer = (() => {

  return (
    <>
    <footer className="bg-theme-dark w-full flex flex-row justify-evenly items-end text-white text-xl pt-10 pb-28">
      <div className="flex flex-col justify-end items-center gap-y-6">
        <a href="/">Home</a>
        <a href="/recipe">Recipe</a>
        <i className="fa-brands fa-2x fa-github"></i>
      </div>
      <div className="flex flex-col justify-end items-center gap-y-6">
        <a href=""></a>
        <a href="/about">About</a>
        <i className="fa-brands fa-2x fa-instagram"></i>
      </div>
    </footer>
    </>
  );

});

export { Footer };