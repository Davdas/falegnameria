import React from "react";
import NextImageGallery, {
  NextImageGalleryProps,
} from "../../components/NextImageGallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const camere: NextImageGalleryProps[] = [
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
    height: 100,
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "ArredoBagno.png",
    height: 300,
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "librerie.png",
    height: 400,
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
    height: 600,
  },
  {
    title: "cucina a vista",
    text: "cucina a vista",
    imgUrl: "CameraDaLetto.png",
    height: 200,
  },
];

const CameraDaLetto = () => {
  return (
    <>
      <div className=" text-white">Camera Da Letto</div>
      {camere.map((camera) => (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className=" w-full"
        >
          <Masonry>
            <NextImageGallery
              imgUrl={camera.imgUrl}
              linkUrl={camera.linkUrl}
              title={camera.title}
              text={camera.text}
              height={camera.height}
            />
          </Masonry>
        </ResponsiveMasonry>
      ))}
    </>
  );
};

export default CameraDaLetto;
