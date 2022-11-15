import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section
        id="chi-siamo"
        className=" w-full grid items-center bg-[#262525] shadow-xl shadow-black"
      >
        <div className=" md:grid grid-cols-2 gap-2 m-auto xl:px-24 px-4 my-20">
          <div className=" text-white md:m-auto">
            <hr className="w-[25%] border-1 border-amber-600 my-4" />
            <h1 className=" text-white font-semibold uppercase p-4 text-2xl tracking-wide lg:text-3xl">
              artigiani del legno
            </h1>
            <h2 className=" text-lg mb-3 uppercase">
              Sviluppiamo e Realizziamo i tuoi progetti su misura
            </h2>
            <div className=" tracking-wide italic text-stone-200">
              <p className=" my:mb-10 text-sm font-light">
                Siamo due artigiani, Danilo e Claudio, che spinti dalla passione
                e l&apos;amore per il proprio lavoro, nel 2014 decidono di unire
                le loro competenze dando vita alla
                <span className=" text-lg text-amber-600 ml-2">
                  ManciniFalegnameria.
                </span>
              </p>
              <br />
              <p className=" md:mb-10 text-sm font-light">
                Siamo una piccola realta&apos; romana che in pochi anni si
                e&apos;fatta conoscere e apprezzare per la professionalita&apos;
                e qualita&apos; che mettiamo nella realizzazione dei nostri
                lavori.
              </p>
              <hr className="w-[55%] border-1 border-amber-600 my-5" />
            </div>
          </div>
          <div className="w-full min-h-[250px] sm:h-[450px] bg-no-repeat bg-cover bg-center shadow-xl shadow-black p-4 bg-[url('/ChiSiamo.png')]"></div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;
