import React from "react";

const Footer = (() => {

  return (
    <>
    <footer className="bg-theme-dark w-full flex flex-row justify-evenly items-end text-white text-xl pt-10 pb-28">
      <div className="flex flex-col justify-end items-center gap-y-6">
        <a href="/">Home</a>
        <a className="fa-brands fa-2x fa-github" href="https://github.com/Trevin-Small/CS390WAP_Final_Project"></a>
      </div>
      <div className="flex flex-col justify-end items-center gap-y-6">
        <a href="/recipes">Recipes</a>
        <a className="fa-brands fa-2x fa-instagram" href="https://instagram.com"></a>
      </div>
    </footer>
    </>
  );

});

export { Footer };
