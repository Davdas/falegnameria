import React, { useState } from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Button from "../common/Button";
import ScrollLink from "./ScrollLink";



const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [navbar, setNavbar] = useState (false)

  const handleNav = () => {
    setNav(!nav);
  };

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener( 'scroll', changeBackground);

  return (
    <>
      <nav className={ navbar ? "fixed top-0 right-0 w-full z-50 bg-stone-600" : "fixed top-0 right-0 w-full z-50"}>
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
              <BsFacebook className=" mr-2" />
              <BsInstagram />
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
                ? " fixed top-0 left-0 w-[75%] sm:w-[64%] md:w-[45%] h-screen bg-white p-4 ease-in duration-300"
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
              <div onClick={handleNav} className=" cursor-pointer text-black">
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-stone-700 my-4 py-2 text-center">
              <p className=" text-stone-700 capitalize py-2 font-semibold text-lg">
                creiamo arredamenti su misura per la tua casa
              </p>
            </div>
            <div className=" flex flex-col mt-2">
              <ul className=" uppercase text-black text-sm text-center font-semibold">
                <li className=" my-8">chi siamo</li>
                <li className=" my-8">progetti</li>
                <li className=" my-8">contatti</li>
                <li className=" my-8">canali social</li>
                <div className=" flex justify-center cursor-pointer">
                  <BsFacebook className=" mr-2 text-stone-700" size={18} />
                  <BsInstagram className=" text-stone-700" size={18} />
                </div>
                <li className=" text-black font-semibold my-8">preventivo</li>
              </ul>
              <div className=" text-center">
                <Button
                  text="Scopri di piu"
                  className="text-black font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
