import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ScrollLink } from "react-scroll";

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
      <div className=" text-white py-5 text-4xl uppercase tracking-wider ml-5">
        {title}
      </div>
      <a href="/#progetti" className="text-white ml-3">
        torna indietro
      </a>
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
