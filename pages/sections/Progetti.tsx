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
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "CameraDaLetto.png",
    index: "02",
    linkUrl: "/ambienti/camera-da-letto",
    title: " Camere da letto",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "armadio.png",
    index: "03",
    linkUrl: "/ambienti/armadio",
    title: "Armadi e Librerie",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "ArredoBagno.png",
    index: "04",
    linkUrl: "/ambienti/arredo-bagno",
    title: "Arredo bagno",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "console.png",
    index: "05",
    linkUrl: "/ambienti/console",
    title: "Console e Copri Termosifoni",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "Porte.png",
    index: "06",
    linkUrl: "/ambienti/porte",
    title: "Porte",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
];

const Progetti = () => {
  return (
    <>
      <section id="progetti" className=" my-20 mb-48">
        <hr className="w-[15%] border-1 border-amber-600 my-4 mb-5 ml-5 xl:ml-24 " />
        <h2 className=" text-white font-semibold uppercase p-4 tracking-wide text-3xl sm:text-4xl ml-5 xl:ml-24">
          cosa facciamo
        </h2>
        <h3 className=" text-white font-semibold uppercase p-4 tracking-wide text-xl sm:text-2xl ml-5 xl:ml-24">
          i nostri progetti
        </h3>
        <hr className="w-[25%] border-1 border-amber-600 my-4 mb-20 ml-5 xl:ml-24" />

        <div className=" lg:grid-cols-3 md:grid grid-cols-2 mx-4 gap-6 items-center xl:mx-20 m-auto">
          {progetti.map((progetto) => (
            <ProjectCard
              key={progetto.index}
              imgUrl={progetto.imgUrl}
              index={progetto.index}
              linkUrl={progetto.linkUrl}
              title={progetto.title}
              text={progetto.text}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Progetti;
