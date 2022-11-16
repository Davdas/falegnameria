import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../components/common/Button";

const Preventivo = () => {
  return (
    <>
      <form className=" tracking-wide">
        <div className=" w-[80%] h-[500px] flex flex-col p-5 text-center bg-zinc-900 m-auto mt-40 lg:w-[60%] rounded-md shadow-md shadow-white">
          <div className=" flex ml-2">
            <BsArrowLeftShort className=" text-lg text-white" />
            <a href="/#home" className="text-amber-600 text-xs">
              torna alla Home
            </a>
          </div>
          <h2 className=" text-white uppercase md:text-2xl xl:text-3xl text-xl mt-16">
            Richiedi Preventivo
          </h2>
          <div className=" text-white my-10">
            <h2 className=" mb-4 md:text-xl">
              Contattaci per un
              <span className=" text-amber-600"> Preventivo</span>
            </h2>
            <h2 className=" md:text-lg">Inviaci una email a: </h2>
            <div className=" flex justify-center my-2">
              <AiOutlineMail className=" mt-1" />
              <h3 className=" ml-2 hover:text-gray-300">
                <a href="mailto:lab.mancinifalegnameria@gmail.com">
                  lab.mancinifalegnameria@gmail.com
                </a>
              </h3>
            </div>
            <h2 className=" tracking-wide md:text-lg mt-5">
              Richiedi il tuo Preventivo Personalizzato e Gratuito
            </h2>
          </div>
        </div>
      </form>
    </>
  );
};

export default Preventivo;
