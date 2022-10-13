import React from "react";
import ImageGallery, { ImageGalleryProps } from "../../components/ImageGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const camere: ImageGalleryProps[] = [
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "ArredoBagno.png",
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "librerie.png",
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
  },
];

const CameraDaLetto = () => {
  return (
    <>
      <div className=" text-white p-5 text-xl uppercase">Camera Da Letto</div>
      {camere.map((camera) => (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            <ImageGallery
              imgUrl={camera.imgUrl}
              linkUrl={camera.linkUrl}
              title={camera.title}
              text={camera.text}
            />
          </Masonry>
        </ResponsiveMasonry>
      ))}
    </>
  );
};

export default CameraDaLetto;
