import { useState } from "react";

const MENU_CLOSE = "./assets/menu-close.svg";
const MENU_OPEN = "./assets/menu-open.svg";

const Nav = (() => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-theme-pink w-full flex p-4 justify-between items-center navbar">
        {/* Logo */}
        <a href="/" className="flex flex-row items-center">
          <img src="/assets/logo.png" alt="logo" className="w-16 h-auto m-0 mr-4 p-0" />
          <h1 className="text-3xl text-white font-bold">Yummy Yields</h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-6">
          <li className="font-poppins font-medium cursor-pointer text-[16px]" >
            <a href={'/'}>Home</a>
          </li>
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a href={"/recipes"}>Recipes</a>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? MENU_CLOSE : MENU_OPEN}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-theme-purple opacity-90 absolute top-24 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-y-4">
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href={"/"}>Home</a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a href={"/recipes"}>Recipes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});

export { Nav };