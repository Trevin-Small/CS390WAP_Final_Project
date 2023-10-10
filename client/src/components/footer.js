import React from "react";

const Footer = (() => {

  return (
    <>
    <footer className="bg-dark-blue w-full flex flex-row justify-evenly items-end text-white text-xl pt-10 pb-28">
      <div className="flex flex-col justify-end items-center gap-y-6">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <i className="fa-brands fa-2x fa-github"></i>
      </div>
      <div className="flex flex-col justify-end items-center gap-y-3">
        <a href="">About</a>
        <a href=""></a>
        <i className="fa-brands fa-2x fa-instagram"></i>
      </div>
    </footer>
    </>
  );

});

export { Footer };