import React, { useState } from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import ScrollLink from "./ScrollLink";
import { useScrollPosition } from "../customHook/useScrollNavbar";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  const navbarScroll = useScrollPosition();

  return (
    <>
      <nav
        className={
          navbarScroll
            ? "fixed top-0 right-0 w-full z-20 bg-zinc-900/90 shadow-gray-500 shadow-md"
            : "fixed top-0 right-0 w-full z-20"
        }
      >
        <ul className=" md:flex max-w-7xl m-auto text-white items-center justify-between mt-5 mb-3 lg:justify-around">
          <li className=" cursor-pointer ml-5">
            <a href="#home">
              <Image src="/logo.png" width="140" height="70" alt="/" />
            </a>
          </li>
          <div className="hidden lg:flex font-bold">
            <ScrollLink hash="home" text="home" />
            <ScrollLink hash="chi-siamo" text="Chi Siamo" />
            <ScrollLink hash="progetti" text="Progetti" />
            <ScrollLink hash="contatti" text="Contatti" />

            <div className=" px-2 flex cursor-pointer">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className=" mr-2" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
          <Link href="/preventivo">
            <li className=" hidden lg:flex border border-amber-600 text-sm rounded-sm uppercase px-3 py-2 font-semibold hover:bg-stone-600">
              preventivo
            </li>
          </Link>
          <div
            onClick={handleNav}
            className=" lg:hidden cursor-pointer absolute top-10 right-6"
          >
            <BiMenuAltRight size={30} />
          </div>
        </ul>
        <div
          className={
            nav
              ? " lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " fixed top-0 left-0 w-[75%] sm:w-[64%] md:w-[45%] h-screen bg-[#1f1e1e]/90 p-4 ease-in duration-300"
                : " fixed top-[0] left-[-200%] p-4 ease-in duration-300"
            }
          >
            <div className=" flex w-full items-center justify-between p-2">
              <Image src="/logo.png" width="110" height="55" alt="/" />
              <div
                onClick={handleNav}
                className=" cursor-pointer text-stone-200"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-amber-600 my-8 py-5 text-center">
              <h2 className=" text-stone-200 capitalize py-2 text-xl">
                creiamo arredamenti su misura per la tua casa
              </h2>
            </div>
            <div className=" flex flex-col">
              <ul className=" uppercase text-stone-200 text-sm text-center font-semibold">
                <li className=" mr-10" onClick={closeMenu}>
                  <ScrollLink hash="home" text="home" />
                </li>
                <li className=" my-8 mr-10" onClick={closeMenu}>
                  <ScrollLink hash="chi-siamo" text="chi siamo" />
                </li>
                <li className=" my-8 mr-10" onClick={closeMenu}>
                  <ScrollLink hash="progetti" text="progetti" />
                </li>
                <li className=" my-8 mr-10" onClick={closeMenu}>
                  <ScrollLink hash="contatti" text="contatti" />
                </li>
                <div className=" flex justify-center cursor-pointer">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook className=" mr-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </div>
                <Link href="/preventivo">
                  <li
                    className=" lg:flex border border-white text-sm rounded-sm uppercase mt-6 px-3 py-2 font-semibold hover:bg-stone-600 w-[50%] mx-auto tracking-wider"
                    onClick={closeMenu}
                  >
                    preventivo
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
