import React from "react";

const Progetti = () => {
  return (
    <>
      <section id="progetti" className=" py-10 px-5">
        <div className=" md:grid grid-cols-2 gap-2 items-center">
          <div className=" text-white max-w-2xl md:m-auto">
            <h1 className=" text-black font-semibold uppercase py-3 px-1 text-2xl tracking-wide lg:ml-5 lg:text-3xl">
              i nostri progetti
            </h1>
            <div className=" tracking-wide italic text-stone-700">
              <p className=" mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className=" max-w-3xl m-auto relative">
            <span className=" text-7xl text-amber-600 absolute top-[-25px] right-[-1
              0px] italic md:left-[20px]">
              01
            </span>
            <img src="/cucina.png" alt="" className="w-full h-full " />
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
      </section>
    </>
  );
};

export default Progetti;
