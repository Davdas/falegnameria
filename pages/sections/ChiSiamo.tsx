import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section id="chi siamo" className="px-5 mt-20 w-full">
        <div className=" md:grid grid-cols-2 gap-2 items-center">
          <div className=" text-white max-w-2xl md:m-auto">
            <h1 className=" text-black font-semibold uppercase py-3 px-1 text-2xl tracking-wide lg:text-3xl">
              artigiani del legno
            </h1>
            <div className=" tracking-wide italic text-stone-700 pr-4">
              <p className=" md:mb-10 py-3 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex.
              </p>
              <hr className="w-[80%]" />
            </div>
          </div>
          <div className=" max-w-3xl m-auto shadow-lg ">
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
