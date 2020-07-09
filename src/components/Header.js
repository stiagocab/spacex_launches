import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const linkClassName =
    "inline-block ml-0 sm:ml-3 px-4 py-1 text-primary border-b-2 sm:border transition-all duration-500 ease-in-out border-transparent hover:border-grey";
  const activeClassName =
    "transition-all duration-500 ease-in-out border-primary";

  return (
    <>
      <header className="px-4 py-4 shadow-md w-full bg-white">
        <div className="container mx-auto flex justify-center sm:justify-between">
          <Link to="/home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1280px-SpaceX-Logo.svg.png"
              alt="spacex_logo"
              className="w-64"
            />
          </Link>
          <div className="hidden sm:block">
            <NavLink
              to="/home"
              className={linkClassName}
              activeClassName={activeClassName}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={linkClassName}
              activeClassName={activeClassName}
            >
              About SpaceX
            </NavLink>
          </div>
        </div>
      </header>
      <div className="flex sm:hidden justify-center mt-2 px-2">
        <NavLink
          to="/home"
          className={linkClassName}
          activeClassName={activeClassName}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={linkClassName}
          activeClassName={activeClassName}
        >
          About SpaceX
        </NavLink>
      </div>
    </>
  );
}
