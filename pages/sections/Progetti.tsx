import React from "react";
import ProjectCard, {
  ProjectCardProps,
} from "../../components/common/ProjectCard";

const progetti: ProjectCardProps[] = [
  {
    imgUrl: "cucina.png",
    index: "01",
    linkUrl: "/ambienti/cucine",
    title: " Cucine",
    text: "Cucine su misura di altissima qualita'", 
    text1: "Personalizzazione di materiali finiture e colori",
    text2: "Cucine su misura per te",
  },
  {
    imgUrl: "CameraDaLetto.png",
    index: "02",
    linkUrl: "/ambienti/camera-da-letto",
    title: " Letti",
    text: "Strutture letto dal design originale di altissima qualita'",
    text1: "Scelta colori e materiali personalizzati",
    text2: "Letti su misura per te",
  },
  {
    imgUrl: "armadio.png",
    index: "03",
    linkUrl: "/ambienti/armadio",
    title: "Armadi e Librerie",
    text: "Viaggiare tra classico e moderno e' ancora possibile",
    text1: "Design sempre originali di altissima qualita'",
    text2: "Armadi e Librerie su misura per te",
  },
  {
    imgUrl: "ArredoBagno.png",
    index: "04",
    linkUrl: "/ambienti/arredo-bagno",
    title: "Arredo bagno",
    text: "Il bagno diventa protagonista del quitidiano",
    text1: "L'utilizzo di diversi materiali di pregio creano un'arredo unico",
    text2: "Bagno su misura per te",
  },
  {
    imgUrl: "console.png",
    index: "05",
    linkUrl: "/ambienti/console",
    title: "Console e Copri Termosifoni",
    text: "Sono i veri accessori della casa",
    text1: "Funzionali e dal design innovativo",
    text2: "Accessori su misura per te",
  },
  {
    imgUrl: "Porte.png",
    index: "06",
    linkUrl: "/ambienti/porte",
    title: "Porte",
    text: "IL primo protagonista della tua casa",
    text1: "Vere porte di falegnameria di altissima qualita'",
    text2: "Porte su misura per te",
  },
];

const Progetti = () => {
  return (
    <>
      <section id="progetti" className=" my-20 mb-48">
        <hr className="w-[30%] border-1 border-amber-600 my-4 mb-3 m-auto" />
        <h2 className=" text-white text-center font-semibold uppercase p-2 tracking-wide text-3xl sm:text-4xl">
          cosa facciamo
        </h2>
        <h3 className=" text-white text-center p-2 tracking-wide text-md sm:text-xl">
          Diamo ai nostri lavori l'originalita' che solo un prodotto artigianale puo' avere
        </h3>
        <hr className="w-[85%] border-1 border-amber-600 my-2 mb-20 ml-5 xl:ml-24" />

        <div className=" lg:grid-cols-3 md:grid grid-cols-2 mx-4 gap-6 items-center xl:mx-20 m-auto">
          {progetti.map((progetto) => (
            <ProjectCard
              key={progetto.index}
              imgUrl={progetto.imgUrl}
              index={progetto.index}
              linkUrl={progetto.linkUrl}
              title={progetto.title}
              text={progetto.text}
              text1={progetto.text1}
              text2={progetto.text2}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Progetti;
