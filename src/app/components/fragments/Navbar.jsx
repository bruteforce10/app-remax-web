"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Montserratt from "@/services/FontPremier";
import clsx from "clsx";
import { MyContext } from "@/lib/AppContext";

const Navbar = ({ menus }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { anchor } = MyContext();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className={clsx(" ", isScrolled && "bg-white/80 backdrop-blur-sm ")}>
      <div
        className={`navbar bg-base-100 bg-transparent  mx-auto max-w-[1250px]  container px-8 ${Montserratt.className} `}
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <Image
              src={"/logo-remax.webp"}
              width={1300}
              height={100}
              className="w-full h-auto min-w-28 max-w-32"
              alt="remax-indonesia"
            />
          </a>
        </div>
        <div className="flex-none max-md:hidden">
          <ul className="menu menu-horizontal px-1">
            {menus.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  anchor == item.menu &&
                    "font-bold border-b-2 border-blue-remax"
                )}
              >
                <a>{item?.menu}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="dropdown md:hidden">
          <div tabIndex={1} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content space-y-4 mt-3 -ml-36 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  anchor == item.menu &&
                    "font-bold border-b-2 border-blue-remax py-2"
                )}
              >
                <a>{item?.menu}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
