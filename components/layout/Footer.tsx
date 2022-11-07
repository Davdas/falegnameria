import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr className="w-[100%] border-1 border-amber-600" />
      <div className=" text-white text-center mt-10 cursor-pointer">
        <Image src="/../public/logo.png" width="170" height="85" alt="/" />
      </div>
      <div
        className=" block lg:flex justify-around items-center w-full h-full p-10 mb-5 text-center"
        id="contatti"
      >
        <div className="text-white lg:text-lg text-md uppercase cursor-pointer mb-10">
          <ScrollLink to="home">
            <h3 className=" mb-2">home</h3>
          </ScrollLink>
          <ScrollLink to="chi-siamo" offset={-80}>
            <h3 className=" mb-2">chi siamo</h3>
          </ScrollLink>
          <ScrollLink to="progetti" offset={-100}>
            <h3 className=" mb-2">progetti</h3>
          </ScrollLink>
          <Link href="/preventivo">
            <h3 className=" mb-2">richiedi preventivo</h3>
          </Link>
        </div>
        <div className="text-white lg:mb-2 mb-10">
          <h2 className="  lg:text-lg text-md uppercase mb-2">Contatti</h2>
          <div className=" flex justify-center">
            <AiOutlineMail className=" mt-1" />
            <h3 className=" ml-2 mb-2">lab.mancinifalegnameria@gmail.com</h3>
          </div>
        </div>
        <div className="text-white text-center">
          <h2 className=" lg:text-lg text-md mb-2 uppercase">
            Mancini Falegnameria
          </h2>
          <div className="flex justify-center flex-col">
            <h2 className=" text-center">Seguici sui nostri canali social</h2>
            <div className=" flex justify-center p-2">
              <a href="https://www.facebook.com" target="_blank">
                <BsFacebook className=" mr-2" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
