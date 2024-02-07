"use client";
import React, { useState } from "react";
import Header from "./Header";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
type Props = {};

function Navbar({}: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toggleNavbar = (): void => setIsClicked(!isClicked);
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-around bg-black font-colo text-white items-center w-full">
        <div className="hidden md:block">
          <Image src={logo} className="w-60 h-16" alt="logo" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-20">
            <li className="">
              <a
                href="/"
                className="hover:text-myGolden-100 hover:border-b-2 hover:border-solid hover:border-myGolden-100"
              >
                Home
              </a>
            </li>
            <li className="hover:border-b-2 hover:border-solid hover:border-myGolden-100">
              <a href="/about" className="hover:text-myGolden-100">
                About Us
              </a>
            </li>
            <li className="hover:border-b-2 hover:border-solid hover:border-myGolden-100">
              <a href="/fleet" className="hover:text-myGolden-100">
                Our Fleet
              </a>
            </li>
            <li className="hover:border-b-2 hover:border-solid hover:border-myGolden-100">
              <a href="/contact" className="hover:text-myGolden-100">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-full h-10 md:hidden">
          <button
            className="text-myGolden-100  bg-black pl-12"
            onClick={toggleNavbar}
          >
            {isClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
          <div className="justify-items-center text-center w-full py-2 text-myGolden-100">
            +44 20 3617 1118
          </div>
        </div>
      </nav>
      {isClicked && (
        <div className="bg-black text-white md:hidden">
          <div className="flex flex-col space-y-6 px-8 bg-black pt-2 pb-3 sm:px-3">
            <a
              href="/"
              className=" w-full hover:text-myGolden-100 hover:bg-gray-800 px-4 py-4"
            >
              Home
            </a>
            <a
              href="/about"
              className=" w-full hover:text-myGolden-100 hover:bg-gray-800 px-4 py-4"
            >
              About Us
            </a>
            <a
              href="/fleet"
              className=" w-full hover:text-myGolden-100 hover:bg-gray-800 px-4 py-4"
            >
              Our Fleet
            </a>
            <a
              href="/contact"
              className=" w-full hover:text-myGolden-100 hover:bg-gray-800 px-4 py-4"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
