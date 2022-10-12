import React from "react";
import ProjectCard, {
  ProjectCardProps,
} from "../../components/common/ProjectCard";

const progetti: ProjectCardProps[] = [
  {
    imgUrl: "cucina.png",
    index: "01",
    linkUrl: "/",
    title: " Cucina a vista",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "CameraDaLetto.png",
    index: "02",
    linkUrl: "/ambienti/camera-da-letto",
    title: " Camera da letto",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "librerie.png",
    index: "03",
    linkUrl: "/",
    title: "Libreria",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "ArredoBagno.png",
    index: "04",
    linkUrl: "/",
    title: "Arredo bagno",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "Armadio.png",
    index: "05",
    linkUrl: "/",
    title: "Armadi",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "Porte.png",
    index: "06",
    linkUrl: "/",
    title: "Porte e pareti",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
];

const Progetti = () => {
  return (
    <>
      <section id="progetti" className=" my-28">
        <h1 className=" text-white font-semibold uppercase text-2xl tracking-wide text-center mb-12 lg:text-4xl md:mb-20">
          i nostri progetti
        </h1>

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
