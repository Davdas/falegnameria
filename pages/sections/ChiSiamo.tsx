import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section id="chi siamo" className=" mt-20 w-full">
        <div className=" md:grid grid-cols-2 gap-2 items-center m-auto xl:px-24 md:px-4 px-3">
          <div className=" text-white md:m-auto">
            <h1 className=" text-white font-semibold uppercase py-3 px-1 text-2xl tracking-wide lg:text-3xl">
              artigiani del legno
            </h1>
            <div className=" tracking-wide italic text-stone-200 pr-4">
              <p className=" md:mb-10 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex.
              </p>
              <hr className="w-[80%]" />
            </div>
          </div>
          <div className=" shadow-lg p-2 mt-4">
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
