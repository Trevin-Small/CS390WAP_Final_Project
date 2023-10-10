import React from "react";

const Nav = (() => {

  return (
    <section id="nav" className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row justify-start items-center">
        <img src="http://placehold.it/" alt=""/>
      </div>
      <div className="w-1/3 flex flex-row justify-end items-center gap-x-1">
        <span>Title</span>
        <span>Title</span>
        <span>Title</span>
      </div>
    </section>
  );

});

export { Nav };