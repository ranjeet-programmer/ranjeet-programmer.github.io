import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/project",
    },
    {
      title: "DSA/PS",
      key: "/coding",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const handleClick = () => {
    if (showMenu === "md:hidden") {
      setShowMenu("");
    } else {
      setShowMenu("md:hidden");
    }
  };

  const pathname = window.location.pathname;
  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu !== "md:hidden" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className="text-4xl font-semibold">R A N J E E T</h1>

          <FaBars
            onClick={handleClick}
            className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
          />
        </div>

        <div className="flex  md:hidden">
          {menuItems.map((menu) => {
            return (
              <li
                className={`list-none mx-5 p-1 ${
                  menu.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${menu.key}`}>{menu.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}
        >
          {menuItems.map((menu) => {
            return (
              <li
                className={`list-none my-2 p-1 ${
                  menu.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${menu.key}`}>{menu.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
