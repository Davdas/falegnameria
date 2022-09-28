import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  index: string;
  imgUrl: string;
  title: string;
  text: string;
  linkUrl: string;
}

const ProjectCard = ({
  index,
  imgUrl,
  title,
  text,
  linkUrl,
}: ProjectCardProps) => {
  return (
    <Link href={linkUrl}>
      <div className="cursor-pointer w-full h-full relative shadow-md shadow-white hover:scale-[102%] ease-in duration-200 p-4 mr-4 rounded-md bg-neutral-900 mt-4">
        {/* Index */}
        <span className=" text-7xl text-amber-600 absolute top-[-25px] right-[-10px] italic md:left-[20px]">
          {index}
        </span>

        <div
          className={`w-full min-h-[400px] bg-cover bg-center `}
          style={{ backgroundImage: `url(/${imgUrl})` }}
        />

        <div className=" p-4">
          <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3">
            {title}
          </h2>
          <p className=" text-white italic">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
