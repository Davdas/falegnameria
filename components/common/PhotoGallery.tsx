import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {BsArrowLeftShort} from "react-icons/bs"

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
    <div className=" text-white py-5 text-4xl text-center uppercase tracking-wider ml-5">
        {title}
        <hr className="w-[25%] border-1 border-amber-600 my-4 mb-3 m-auto" />
      </div>
      <div className=" flex ml-2">
      <BsArrowLeftShort className=" text-2xl text-white"/>
        <a href="/#progetti" className="text-white">indietro</a>
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
