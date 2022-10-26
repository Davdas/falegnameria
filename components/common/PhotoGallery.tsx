import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export interface IPhoto {
  title: string;
  text: string;
  imgUrl: string;
}

interface IPhotoGalleryProps {
  photos: IPhoto[];
  title: string;
}

const PhotoGallery = ({ photos, title }: IPhotoGalleryProps) => {
  return (
    <section className=" max-w-[1000px] mx-auto mt-40">
      <div className=" text-white py-10 text-4xl uppercase tracking-wider ml-5">
        {title}
      </div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px" className=" p-3">
          {photos.map((photo) => (
            <img
              key={photo.imgUrl}
              src={`/${photo.imgUrl}`}
              alt={photo.title}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
};

export default PhotoGallery;
