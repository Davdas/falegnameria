import React from "react";

const Progetti = () => {
  return (
    <>
      <section id="progetti" className="px-5 mt-20">
        <h1 className=" text-black font-semibold uppercase text-2xl tracking-wide text-center mb-12 lg:text-4xl md:mb-20">
          i nostri progetti
        </h1>
        <div className=" md:flex justify-center items-center border-red-800 border-2 p-2">
          <div className=" w-full h-full relative shadow-lg shadow-black hover:scale-105 ease-in duration-200 p-4 mr-4 rounded-md bg-amber-100">
            <span
              className=" text-7xl text-amber-600 absolute top-[-25px] right-[-1
              0px] italic md:left-[20px]"
            >
              01
            </span>
            <img src="/cucina.png" alt="" className=" w-full h-full" />
            <div className=" p-4">
              <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3 font-semibold ">
                cucina a vista
              </h2>
              <p className=" text-stone-700 italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati nobis nostrum exercitationem accusantium blanditiis
              </p>
              <a href="" className=" text-lg text-black italic underline">
                vedi progetti
              </a>
            </div>
          </div>

          <div className="  w-full h-full relative shadow-lg shadow-black hover:scale-105 ease-in duration-200 p-4 mr-4 rounded-sm bg-amber-100">
            <span
              className=" text-7xl text-amber-600 absolute top-[-25px] right-[-1
              0px] italic md:left-[20px]"
            >
              02
            </span>
            <img src="/CameraDaLetto.png" alt="" className=" bg-fill" />
            <div className=" p-4">
              <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3 font-semibold ">
                cucina a vista
              </h2>
              <p className=" text-stone-700 italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati nobis nostrum exercitationem accusantium blanditiis
              </p>
              <a href="" className=" text-lg text-black italic underline">
                vedi progetti
              </a>
            </div>
          </div>

          <div className="  w-full h-full relative shadow-lg shadow-black hover:scale-105 ease-in duration-200 p-4 rounded-md bg-amber-100">
            <span
              className=" text-7xl text-amber-600 absolute top-[-25px] right-[-1
              0px] italic md:left-[20px]"
            >
              03
            </span>
            <img src="/librerie.png" alt="" className=" bg-fill" />
            <div className=" p-4">
              <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3 font-semibold ">
                cucina a vista
              </h2>
              <p className=" text-stone-700 italic">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati nobis nostrum exercitationem accusantium blanditiis
              </p>
              <a href="" className=" text-lg text-black italic underline">
                vedi progetti
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Progetti;
