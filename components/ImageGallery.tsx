import React from "react";

export interface ImageGalleryProps {
  title: string;
  text: string;
  imgUrl: string;
  linkUrl?: string;
  className?: string;
}

const ImageGallery = ({ title, text, imgUrl, linkUrl }: ImageGalleryProps) => {
  return (
    <div className=" bg-white p-5 mt-3 ml-2">
      <div
        className={`w-[500px] h-[400px] bg-cover bg-center m-auto`}
        style={{ backgroundImage: `url(/${imgUrl})` }}
      />
      <div className=" text-center">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageGallery;
