import { useState } from "react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "recipes",
    title: "Recipes",
  },
  {
    id: "about",
    title: "About",
  },
];

const MENU_CLOSE = "./assets/menu-close.svg";
const MENU_OPEN = "./assets/menu-open.svg";
//const LOGO = "";

const Nav = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-theme-pink w-full flex p-4 justify-between items-center navbar">
      {/* Logo */}
      <a href="/" className="flex flex-row items-center">
        <img src="./assets/logo.png" alt="logo" className="w-16 h-auto m-0 mr-4 p-0" />
        <h1 className="text-3xl text-white font-bold">Yummy Yields</h1>
      </a>

      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
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
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Nav };