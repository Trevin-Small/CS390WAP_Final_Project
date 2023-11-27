import { useState } from "react";

const MENU_CLOSE = "/assets/menu-close.svg";
const MENU_OPEN = "/assets/menu-open.svg";

const Nav = (() => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-theme-pink w-full flex p-4 justify-between items-center navbar">
        {/* Logo */}
        <a href="/" className="flex flex-row items-center">
          <img src="/assets/logo.png" alt="logo" className="w-16 h-auto m-0 mr-4 p-0" />
          <h1 className="text-xl text-white font-bold sm:text-2xl md:text-3xl">Yummy Yields</h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-x-6">
          <li className="font-poppins font-medium cursor-pointer text-[16px]" >
            <a className="text-xl" href={'/'}>Home</a>
          </li>
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a className="text-xl" href={"/recipes"}>Recipes</a>
          </li>
          <li className="font-poppins font-medium cursor-pointer text-[16px]">
            <a className="text-xl" href={"/addrecipe"}>Add Recipe</a>
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
            } p-6 bg-theme-purple absolute h-full top-20 right-0 min-w-[140px] rounded-l-xl sidebar`}
          >
            <ul className="list-none flex justify-start items-start flex-1 flex-col gap-y-4 text-white">
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a className="text-2xl" href={"/addrecipe"}>Add Recipe</a>
              </li>
 
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a className="text-2xl " href={"/"}>Home</a>
              </li>
              <li className="font-poppins font-medium cursor-pointer text-[16px]">
                <a className="text-2xl" href={"/recipes"}>Recipes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
});

export { Nav };
