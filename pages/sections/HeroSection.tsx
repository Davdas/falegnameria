import { url } from "inspector";
import React from "react";
import Button from "../../components/common/Button";

const HeroSection = () => {
  return (
    <main className="flex justify-center items-center" id="home">
      {/* Hero Image */}
      <div className="w-full h-screen bg-cover bg-center relative md:bg-[url('/heroImage.png')] bg-[url('/mobile2.png')]">
        {/* Overlay */}
        <div className=" bg-black/40 z-10 w-full bg-cover bg-center absolute top-0 left-0 right-0 bottom-0"></div>
      </div>

      <div className="absolute text-center top-[55%] z-10">
        <h1 className=" text-amber-600 lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase tracking-wider font-semibold mb-2">
          mancini falegnameria
        </h1>
        <h2 className=" text-white lg:text-3xl md:text-2xl text-xl tracking-wide capitalize mb-4">
          creiamo arredamenti su misura
        </h2>
        <Button text="Scopri di piu" onClick={() => alert("FIX THIS")} />
      </div>
    </main>
  );
};

export default HeroSection;
