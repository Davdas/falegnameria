import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section id="contatti" className=" mb-3">
        <div className=" text-white text-center cursor-pointer p-10">
          <Image src="/logo.png" width="170" height="85" alt="/" />
        </div>
        <div className=" block lg:flex justify-around items-center w-full h-full text-center">
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
            <h3 className=" text-center">
              Siamo a <span className=" text-amber-600 uppercase">Roma</span> in
              via Boccea 00166
            </h3>
          </div>
          <div className="text-white text-center">
            <h2 className=" lg:text-lg text-md mb-2 uppercase">
              Mancini Falegnameria
            </h2>
            <div className="flex justify-center flex-col">
              <h2 className=" text-center">Seguici sui nostri canali social</h2>
              <div className=" flex justify-center p-2">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
