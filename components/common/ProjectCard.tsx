import Link from "next/link";
import React from "react";

export interface ProjectCardProps {
  index: string;
  imgUrl: string;
  title: string;
  text: string;
  text1: string;
  text2: string;
  linkUrl: string;
}

const ProjectCard = ({
  index,
  imgUrl,
  title,
  text,
  text1,
  text2,
  linkUrl,
}: ProjectCardProps) => {
  return (
    <Link href={linkUrl}>
      <div className="cursor-pointer w-full h-full relative hover:scale-[98%] ease-in duration-100 hover:bg-zinc-700 shadow-xl shadow-black p-4 rounded-md bg-zinc-800 mb-4">
        <div
          className={`w-full min-h-[300px] bg-cover bg-center `}
          style={{ backgroundImage: `url(/${imgUrl})` }}
        />
        <div className=" p-4 mt-5">
          <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3">
            {title}
          </h2>
          <div className=" mt-5">
            <p className=" text-white italic mb-2">{text}</p>
            <p className=" text-white italic mb-2">{text1}</p>
            <p className=" text-white italic mb-2">{text2}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
