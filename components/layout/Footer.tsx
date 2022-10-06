import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <hr className="w-[100%] border-1 border-white" />
      <div className=" flex justify-around items-center w-full h-[300px] p-5 text-center">
        <div className=" text-white text-center p-3 mt-5 cursor-pointer">
          <Image src="/../public/logo.png" width="170" height="85" alt="/" />
        </div>
        <div className="text-white md:mb-8 p-3">
          <h2 className=" text-xl mb-5 uppercase mt-16">Contatti</h2>
          <h3 className=" mb-2">Email : falegnameri@gmail.com</h3>
          <h3>Telefono : 333/555 555 555</h3>
        </div>
        <div className="text-white p-3">
          <h2 className="text-xl mb-5 uppercase">Mancini Falegnameria</h2>
          <div className="flex">
            <h2 className=" ml-3">Seguici sui nostri social</h2>
            <BsFacebook className="ml-2" size={18} />
            <BsInstagram className="ml-2" size={18} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
