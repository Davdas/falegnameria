import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section id="chi siamo" className="px-5 mt-20 w-full">
        <div className=" md:grid grid-cols-2 gap-2 items-center">
          <div className=" text-white max-w-2xl md:m-auto">
            <h1 className=" text-black font-semibold uppercase py-3 px-1 text-2xl tracking-wide lg:ml-5 lg:text-3xl">
              arigiani del legno
            </h1>
            <div className=" tracking-wide italic text-stone-700 border-b-2">
              <p className=" md:mb-10 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex.
              </p>
            </div>
          </div>
          <div className=" max-w-3xl m-auto shadow-lg shadow-black hover:scale-105 ease-in duration-300">
            <img src="/ChiSiamo .png" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;

{
  /* <div className=" w-full h-auto m-auto shadow-lg shadow-white flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer">
          <img className=" rounded-xl" src="./ChiSiamo .png" alt="/" />
    </div> */
}
