import React from "react";

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center">
      <div className=" w-full bg-cover bg-center relative">
        <img
          src="/heroImage.png"
          alt=""
          className="hidden sm:block m-auto object-cover"
        />
        <img
          src="/mobile2.png"
          alt=""
          className=" sm:hidden w-full m-auto h-full"
        />
        <div className=" bg-black/40 z-10 w-full bg-cover bg-center absolute top-0 left-0 right-0 bottom-0"></div>
      </div>

      <div className="absolute p-5t mt-32 text-center z-30">
        <h1 className=" text-amber-600 lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase tracking-wider font-semibold">
          mancini falegnameria
        </h1>
        <h2 className=" text-white lg:text-3xl md:text-2xl text-xl tracking-wide capitalize">
          creaiamo arredamenti su misura
        </h2>
        <button className="md:text-md md:font-semibold text-sm bg-stone-700 uppercase px-5 py-2 rounded-2xl hover:bg-stone-600 text-white mt-2">
          scopri di piu'
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
