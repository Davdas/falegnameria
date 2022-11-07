import React from "react";
import Image from "next/image";
import { BsFacebook, BsFillTelephoneForwardFill, BsInstagram } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai"

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
            <h2 className=" mb-2">home</h2>
          </ScrollLink>
          <ScrollLink to="chi-siamo" offset={-80}>
            <h2 className=" mb-2">chi siamo</h2>
          </ScrollLink>
          <ScrollLink to="progetti" offset={-100}>
            <h3 className=" mb-2">progetti</h3>
          </ScrollLink>
          <h3>richiedi preventivo</h3>
        </div>
        <div className="text-white lg:mb-2 mb-10">
          <h2 className="  lg:text-lg text-md uppercase mb-2">Contatti</h2>
          <div className=" flex">
             <AiOutlineMail className=" mt-1"/>
             <h3 className=" ml-2 mb-2">lab.mancinifalegnameria@gmail.com</h3>
          </div>
          <div className=" flex flex-col">
               <BsFillTelephoneForwardFill className=" mt-3"/>
               <span>340/6408332</span><br />
               <BsFillTelephoneForwardFill />
               <span>328/7020426</span><br />
          </div>
         
        </div>
        <div className="text-white text-center">
          <h2 className=" lg:text-lg text-md mb-2 uppercase">
            Mancini Falegnameria
          </h2>
          <div className="flex justify-center flex-col">
            <h2 className=" text-center">Seguici sui nostri social</h2>
            <div className=" flex justify-center p-2">
              <BsFacebook className="ml-2 cursor-pointer" size={18} />
              <BsInstagram className="ml-2 cursor-pointer" size={18} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
