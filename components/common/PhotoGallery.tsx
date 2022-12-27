import { useState } from "react";
import Masonry from "react-masonry-css";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import {
  BsArrowRightCircle as ArrowRightIcon,
  BsArrowLeftCircle as ArrowLeftIcon,
} from "react-icons/bs";
import Link from "next/link";

interface IPhotoGalleryProps {
  photos: any[];
}

const PhotoGallery = ({ photos }: IPhotoGalleryProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>();

  const handleImageClick = (photoIndex: number) => {
    setSelectedPhotoIndex(photoIndex);
    setShowModal(true);
  };

  const handleImageNavigation = (type: "back" | "next") => {
    if (selectedPhotoIndex === undefined) return;
    if (type === "back") {
      if (selectedPhotoIndex === 0)
        return setSelectedPhotoIndex(photos.length - 1);
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }
    if (type === "next") {
      if (selectedPhotoIndex === photos.length - 1)
        return setSelectedPhotoIndex(0);
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    }
  };

  return (
    <div className="mt-6 mr-2">
      <Masonry
        breakpointCols={{
          default: 3,
          700: 2,
          500: 1,
        }}
        className="flex w-auto"
        columnClassName="bg-clip-padding pl-3"
      >
        {photos.map((photo, index) => (
          <img
            className="mb-4"
            onClick={() => handleImageClick(index)}
            key={photo.foto.url}
            src={photo.foto.url}
            alt={photo.foto.url}
          />
        ))}
      </Masonry>
      <Link href="/preventivo">
        <li className=" w-full ml-1 text-white text-center list-none text-lg border border-amber-600 rounded-sm uppercase px-3 py-5 hover:bg-stone-600 mb-5">
          richiedi preventivo
        </li>
      </Link>

      {showModal && selectedPhotoIndex !== undefined && (
        <div className="fixed top-[50px] left-0 right-0 w-full mx-auto h-full bg-black bg-opacity-70 flex items-center justify-center">
          <div
            className="fixed top-[120px] right-[5%] z-30 cursor-pointer "
            onClick={() => setShowModal(false)}
          >
            <CloseIcon size={20} className="text-white" />
          </div>
          <ArrowLeftIcon
            size={30}
            className="text-white absolute top-[50%] left-[5%] transform translate-y-[-50%] cursor-pointer"
            onClick={() => handleImageNavigation("back")}
          />
          <img
            src={photos[selectedPhotoIndex].foto.url}
            alt=""
            className="max-w-lg pointer-events-none"
          />
          <ArrowRightIcon
            size={30}
            className="text-white absolute top-[50%] right-[5%] transform translate-y-[-50%] cursor-pointer"
            onClick={() => handleImageNavigation("next")}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
