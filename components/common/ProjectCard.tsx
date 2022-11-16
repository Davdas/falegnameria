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
    <div className="cursor-pointer w-full h-full relative sm:hover:scale-[101%] ease-in duration-200 p-4 rounded-md shadow-xl shadow-black bg-zinc-800 mb-4">
      <div
        className={`w-full min-h-[300px] bg-cover bg-center `}
        style={{ backgroundImage: `url(/${imgUrl})` }}
      />
      <Link href={linkUrl}>
        <p className=" text-white px-4 mt-3 underline underline-offset-8 hover:text-gray-400 inline-block">
          Vedi Foto
        </p>
      </Link>

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
  );
};

export default ProjectCard;
