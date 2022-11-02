import React, { useEffect, useState } from "react";
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
  console.log(navbarScroll);

  return (
    <>
      <nav
        className={
          navbarScroll
            ? "fixed top-0 right-0 w-full z-50 bg-stone-500/90"
            : "fixed top-0 right-0 w-full z-50"
        }
      >
        <ul className=" md:flex max-w-7xl m-auto text-white items-center justify-between p-2">
          <li className=" cursor-pointer">
            <Image src="/../public/logo.png" width="140" height="70" alt="/" />
          </li>
          <div className=" hidden lg:flex font-semibold">
            <ScrollLink hash="home" text="home" />
            <ScrollLink hash="chi-siamo" text="Chi Siamo" />
            <ScrollLink hash="progetti" text="Progetti" />
            <ScrollLink hash="contatti" text="Contatti" />

            <div className=" px-2 flex cursor-pointer">
              <a href="https://www.facebook.com" target="_blank">
                <BsFacebook className=" mr-2" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram />
              </a>
            </div>
          </div>
          <Link href="/preventivo">
            <li className=" hidden lg:flex border border-white text-sm rounded-sm uppercase px-5 py-2 font-semibold hover:bg-stone-600">
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
                ? " fixed top-0 left-0 w-[75%] sm:w-[64%] md:w-[45%] h-screen bg-black/80 p-4 ease-in duration-300"
                : " fixed top-[0] left-[-200%] p-4 ease-in duration-300"
            }
          >
            <div className=" flex w-full items-center justify-between p-2">
              <Image
                src="/../public/logo.png"
                width="110"
                height="55"
                alt="/"
              />
              <div
                onClick={handleNav}
                className=" cursor-pointer text-stone-200"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-amber-600 my-8 py-5 text-center">
              <p className=" text-stone-200 capitalize py-2 text-xl">
                creiamo arredamenti su misura per la tua casa
              </p>
            </div>
            <div className=" flex flex-col mt-10">
              <ul className=" uppercase text-stone-200 text-sm text-center font-semibold">
                <li className=" my-8 mr-10" onClick={closeMenu}>
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
                  <BsFacebook className=" mr-2 text-stone-400" size={18} />
                  <BsInstagram className=" text-stone-400" size={18} />
                </div>
                <li className=" text-stone-200 font-semibold my-8"></li>
                <li className=" my-8 mr-10 text-white" onClick={closeMenu}>
                  <ScrollLink hash="progetti" text="scopri di piu" />
                </li>
                <Link href="/preventivo">
                  <li
                    className=" lg:flex border border-white text-sm rounded-sm uppercase px-5 py-2 font-semibold hover:bg-stone-600 w-[50%] mx-auto"
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
