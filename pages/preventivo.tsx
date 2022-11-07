import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../components/common/Button";

const Preventivo = () => {
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
    
      <form action="" method="post" onSubmit={handleOnSubmit}>
        <div className=" w-[80%] h-[500px] flex flex-col p-5 text-center bg-zinc-900 m-auto mt-40 lg:w-[60%] rounded-md shadow-md shadow-white">
        <div className=" flex ml-2">
      <BsArrowLeftShort className=" text-2xl text-white"/>
        <a href="/#progetti" className="text-white">indietro</a>
      </div>
          <h2 className=" text-white font-semibold md:text-xl text-lg mb-10">
            Richiedi Preventivo
          </h2>
          <div className="mb-2">
            <label htmlFor="name" className="text-black">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                className=" p-2 rounded-sm lg:w-[70%] w-[80%] mb-2"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="surname" className="text-black">
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Cognome"
                className=" p-2 rounded-sm lg:w-[70%] w-[80%] mb-2"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-black">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className=" p-2 rounded-sm lg:w-[70%] w-[80%] mb-2"
                required
              />
            </label>
          </div>
          <div>
            <textarea
              className="text-black rounded-sm p-3 lg:w-[70%] w-[80%]"
              rows={5}
              cols={20}
              placeholder="scrivi messaggio"
              required
            ></textarea>
          </div>
          <div className=" flex justify-center">
             <Button text="invia" className=" w-[15%]"/>
          </div>
        </div>
      </form>
    </>
  );
};

export default Preventivo;
