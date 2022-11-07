import React from "react";

const ChiSiamo = () => {
  return (
    <>
      <section id="chi-siamo" className=" mt-20 lg:my-48 w-full">
        <div className=" md:grid grid-cols-2 gap-2 items-center m-auto xl:px-24 px-4">
          <div className=" text-white md:m-auto">
            <hr className="w-[25%] border-1 border-amber-600 my-4" />
            <h1 className=" text-white font-semibold uppercase p-4 text-2xl tracking-wide lg:text-3xl">
              artigiani del legno
            </h1>
            <h2 className=" text-lg mb-3 uppercase">Sviluppiamo e Realizziamo i tuoi progetti su misura</h2>
            <div className=" tracking-wide italic text-stone-200">
              <p className=" my:mb-10 text-sm font-light">
           Siamo due artigiani, Danilo e Claudio, che spinti dalla passione e l'amore per il proprio lavoro, nel 2014 decidono di unire le loro competenze dando vita alla <span className=" text-lg text-amber-600">ManciniFalegnameria.</span> 
              </p>
              <br />
              <p className=" md:mb-10 text-sm font-light">
               Siamo una piccola realta' romana che in pochi anni si e'fatta conoscere e apprezzare per la professionalita' e qualita' che mettiamo nella realizzazione dei nostri lavori.
              </p>
              <hr className="w-[55%] border-1 border-amber-600 my-5" />
            </div>
          </div>
          <div className=" w-full min-h-[500px] bg-no-repeat bg-cover bg-center shadow-lg mt-4 p-4 bg-[url('/ChiSiamo.png')]"></div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;
