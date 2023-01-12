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
    <>
      <div className=" w-full h-full relative hover:scale-[98%] ease-in duration-100 hover:bg-zinc-700 shadow-xl shadow-black p-4 rounded-md bg-zinc-800 mb-4">
        <div
          className={`w-full min-h-[300px] bg-cover bg-center rounded-sm `}
          style={{ backgroundImage: `url(/${imgUrl})` }}
        />
        <div className=" p-4 mt-5">
          <h2 className=" text-amber-600 uppercase tracking-wide text-3xl mt-3">
            {title}
          </h2>
          <div className=" mt-5">
            <p className=" text-white italic mb-2">{text}</p>
            <p className=" text-white italic mb-2">{text1}</p>
            <h2 className=" text-white italic mb-2">{text2}</h2>
          </div>
        </div>
        <Link href={linkUrl}>
          <p className=" text-amber-600 uppercase underline underline-offset-4 hover:text-white cursor-pointer ml-4">
            vedi foto
          </p>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
