import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../components/common/Button";

const Preventivo = () => {
  return (
    <>
      <form>
        <div className=" w-[80%] h-[500px] flex flex-col p-5 text-center bg-zinc-900 m-auto mt-40 lg:w-[60%] rounded-md shadow-md shadow-white">
          <div className=" flex ml-2">
            <BsArrowLeftShort className=" text-lg text-white" />
            <a href="/#home" className="text-amber-600 text-xs">
              torna alla Home
            </a>
          </div>
          <h2 className=" text-white font-semibold md:text-xl text-lg mt-16">
            Richiedi Preventivo
          </h2>
          <div className=" text-white my-10">
            <h2 className=" mb-3">
              Contattaci per un
              <span className=" text-amber-600"> Preventivo</span>
            </h2>
            <h2>Inviaci una email a: </h2>
            <div className=" flex justify-center">
              <AiOutlineMail className="mt-1" />
              <h3 className=" ml-2 mb-3 text-sm mt-1">
                lab.mancinifalegnameria@gmail.com
              </h3>
            </div>
            <h2>Saremo lieti di Risponderti</h2>
          </div>
        </div>
      </form>
    </>
  );
};

export default Preventivo;
