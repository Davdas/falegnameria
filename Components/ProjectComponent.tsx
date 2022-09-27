import React from "react";

interface ProjectComponentPros {
  id: number;
  src?: string | undefined;
  title: string;
  text: string;
  link: string;
}

const ProjectComponent: React.FC<ProjectComponentPros> = ({
  id,
  title,
  text,
  link,
}) => {
  return (
    <div>
      <div className=" md:grid grid-cols-2 gap-2 items-center">
        <div className=" m-auto relative w-full max-w-2xl shadow-lg shadow-black hover:scale-105 ease-in duration-300">
          <span
            className=" text-7xl text-amber-600 absolute top-[-25px] right-[-1
              0px] italic md:left-[20px]"
          >
            {id}
          </span>
        </div>
        <div className=" max-w-2xl md:m-auto">
          <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3 font-semibold ">
            {title}
          </h2>
          <p className=" text-stone-700 italic">{text}</p>
          <a href="" className=" text-lg text-black italic underline">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
