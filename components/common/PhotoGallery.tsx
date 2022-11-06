import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import {
  BsArrowRightCircle as ArrowRightIcon,
  BsArrowLeftCircle as ArrowLeftIcon,
} from "react-icons/bs";

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
    <>
      {showModal && selectedPhotoIndex !== undefined && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex items-center justify-center">
          <div
            className="fixed top-[100px] right-[100px] z-30 cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <CloseIcon size={40} className="text-white" />
          </div>
          <ArrowLeftIcon
            size={40}
            className="text-white absolute top-[50%] left-[100px] transform translate-y-[-50%]"
            onClick={() => handleImageNavigation("back")}
          />
          <img
            src={photos[selectedPhotoIndex].foto.url}
            alt=""
            className="max-w-lg pointer-events-none"
          />
          <ArrowRightIcon
            size={40}
            className="text-white absolute top-[50%] right-[100px] transform translate-y-[-50%]"
            onClick={() => handleImageNavigation("next")}
          />
        </div>
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="15px" className=" p-3">
          {photos.map((photo, index) => (
            <img
              onClick={() => handleImageClick(index)}
              key={photo.foto.url}
              src={photo.foto.url}
              alt={photo.foto.url}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default PhotoGallery;
