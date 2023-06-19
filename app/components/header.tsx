"use client";

import Link from "next/link";
// import React, { useState } from "react";
import Button from "./Button";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { GiHighGrass } from "react-icons/Gi";


const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contect", link: "/contect" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className="md:flex items-center justify-between bg-[#292b2b] py-4 md:px-10 px-7">
          <div
            className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins] 
      text-white"
          >
            <GiHighGrass />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <HiOutlineMenu />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:bg-[#292b2b]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-14 " : "top-[-490px]"
            }`}
          >
            {Links.map(
              (link: {
                name:
                  | boolean
                  | React.Key
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
                link: string | undefined;
              }) => (
                <li className="md:ml-8 text-xl md:my-0 my-7">
                  <a
                    href={link.link}
                    className="text-white hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {/* <section>
        <nav className="bg-gradient bg-center bg-cover  to-indigo-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <a href="#">
                  <img
                    className="w-[10%] md:w-[30%] "
                    src="img/logo.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <Link
                    href="/"
                    className="text-black font-medium text-xl hover:text-gray-200 px-3 py-2 rounded-md "
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-black font-medium text-xl hover:text-gray-200 px-3 py-2 rounded-md "
                  >
                    About
                  </Link>
                  <Link
                    href="/products"
                    className="text-black font-medium text-xl hover:text-gray-200 px-3 py-2 rounded-md "
                  >
                    products
                  </Link>
                  <Link
                    href="/contect"
                    className="text-black font-medium text-xl hover:text-gray-200 px-3 py-2 rounded-md "
                  >
                    contect
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section> */}
    </>
  );
};

export default Header;
