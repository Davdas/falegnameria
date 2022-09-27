import React from "react";
import ProjectCard, {
  ProjectCardProps,
} from "../../components/common/ProjectCard";

const progetti: ProjectCardProps[] = [
  {
    imgUrl: "cucina.png",
    index: "01",
    linkUrl: "/",
    title: " cucina a vista",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "CameraDaLetto.png",
    index: "02",
    linkUrl: "/",
    title: " cucina a vista",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
  {
    imgUrl: "librerie.png",
    index: "03",
    linkUrl: "/",
    title: " cucina a vista",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nobis nostrum exercitationem accusantium blanditiis",
  },
];

const Progetti = () => {
  return (
    <>
      <section id="progetti" className="px-5 my-20">
        <h1 className=" text-black font-semibold uppercase text-2xl tracking-wide text-center mb-12 lg:text-4xl md:mb-20">
          i nostri progetti
        </h1>
        <div className=" md:flex justify-center items-center border-red-800 border-2 p-2 xl:mx-40">
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
