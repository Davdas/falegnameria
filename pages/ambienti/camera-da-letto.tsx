import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
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
  return <PhotoGallery photos={photos} title={"camera da letto"} />;
};

export default CameraDaLetto;
