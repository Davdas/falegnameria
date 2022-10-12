import React from "react";

export interface NextImageGalleryProps {
  title: string;
  text: string;
  imgUrl: string;
  linkUrl?: string;
  className?: string;
  height?: number;
}

const NextImageGallery = ({
  title,
  text,
  imgUrl,
  linkUrl,
}: NextImageGalleryProps) => {
  return (
    <div className=" bg-white p-5 w-full m-auto">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div
        className={`w-full h-[400px] bg-cover bg-center`}
        style={{ backgroundImage: `url(/${imgUrl})` }}
      />
    </div>
  );
};

export default NextImageGallery;
