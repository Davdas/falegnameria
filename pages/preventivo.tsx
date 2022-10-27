import React from "react";

const Preventivo = () => {
  return (
    <>
      <form action="">
        <div className=" w-[60%] h-[500px] flex flex-col p-5 text-center bg-orange-300 m-auto mt-40">
          <h2 className=" text-black font-semibold md:text-xl text-lg mt-10">
            Richiedi Preventivo
          </h2>
          <div className="mb-2">
            <label htmlFor="name" className="text-black">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className=" p-2 rounded-sm md:w-[70%] w-[80%]"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="cognome" className="text-black">
              <input
                type="text"
                name="cognome"
                placeholder="cognome"
                className=" p-2 rounded-sm md:w-[70%] w-[80%]"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="text-black">
              <input
                type="text"
                name="email"
                placeholder="email"
                className=" p-2 rounded-sm md:w-[70%] w-[80%]"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <textarea
              className="text-black rounded-sm p-3 md:w-[70%] w-[80%]"
              rows={5}
              cols={20}
              placeholder="scrivi messaggio"
              required
            ></textarea>
          </div>
          <div className=" flex justify-center">
            <button className=" bg-white px-6 py-2 rounded-sm font-semibold uppercase text-sm">
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Preventivo;
