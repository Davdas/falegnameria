import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section id="chi-siamo" className=" my-28 w-full">
        <div className=" md:grid grid-cols-2 gap-2 items-center m-auto xl:px-24 px-4">
          <div className=" text-white md:m-auto">
            <hr className="w-[30%] border-1 border-amber-600 my-4" />
            <h1 className=" text-white font-semibold uppercase py-3 px-4 text-2xl tracking-wide lg:text-3xl">
              artigiani del legno
            </h1>
            <div className=" tracking-wide italic text-stone-200">
              <p className=" my:mb-10 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex.
              </p>
              <br />
              <p className=" md:mb-10 text-sm font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate dolor laborum odio. Consequatur ipsa dolorum sint!
                Doloremque sit tenetur numquam tempore, libero veritatis, ipsa
                ex.
              </p>
              <hr className="w-[80%] border-1 border-amber-600 my-5" />
            </div>
          </div>
          <div className=" w-full min-h-[500px] bg-no-repeat bg-cover bg-center shadow-lg mt-4 p-4 bg-[url('/ChiSiamo.png')]"></div>
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
