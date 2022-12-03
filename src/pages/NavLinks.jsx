import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const NavLinks = ({ lightDark, showNavbar, toggleNavbar, switchClose }) => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <h1
          className={`${
            lightDark ? "text-color5" : "text-color1"
          } font-bold text-xl`}
        >
          NuelC Studios
        </h1>
        <nav className="hidden md:flex justify-between w-[65%] items-center cursor-pointer">
          <ul
            className={`${
              lightDark ? "text-color5" : "text-color1"
            } flex gap-10 font-bold`}
          >
            <Link to="/" className="hover:text-[#121212] hover:underline">
              Home
            </Link>
            <Link to="AboutUs" className="hover:text-[#121212] hover:underline">
              About
            </Link>{" "}
            <a href="#services">
              {" "}
              <li className="hover:text-[#121212] hover:underline">Services</li>
            </a>
            <a href="#projects">
              <li className="hover:text-[#121212] hover:underline">Projects</li>
            </a>
          </ul>
          <Link to="hireUs">
            {" "}
            <h1 className="ml-auto px-4 py-1 rounded-md text-color1 bg-color5 hover:translate-x-1 hover:bg-[#6b1b09]">
              Hire Us
            </h1>
          </Link>
        </nav>
        {showNavbar ? (
          <MdOutlineCancel
            className={`${
              lightDark ? "text-color2" : "text-color5"
            } text-[30px]  md:hidden`}
            onClick={toggleNavbar}
          />
        ) : (
          <GiHamburgerMenu
            className={`${
              lightDark ? "text-color2" : "text-color5"
            } text-[30px] md:hidden`}
            onClick={toggleNavbar}
          />
        )}
      </div>
      {showNavbar && (
        <div
          className="md:hidden flex flex-col items-center bg-[#5c5b5b] text-color1 py-5 mt-5"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          onClick={switchClose}
        >
          <ul
            className={`${
              lightDark ? "" : "text-color1"
            } flex flex-col gap-5 font-bold text-lg w-full items-center`}
          >
            <Link
              to="/"
              className="hover:text-color5 border-b-2 w-full text-center pb-2"
            >
              Home
            </Link>
            <Link
              to="AboutUs"
              className="hover:text-color5 border-b-2 w-full text-center pb-2"
            >
              About
            </Link>
            <Link to="Services">
              <li className="hover:text-color5 border-b-2 w-full text-center pb-2">
                Services
              </li>
            </Link>
            <li className="hover:text-color5 border-b-2 w-full text-center pb-2">
              Projects
            </li>
          </ul>
          <Link to="hireUs">
            {" "}
            <h1 className=" mt-5 font-bold text-lg">Hire Us</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
