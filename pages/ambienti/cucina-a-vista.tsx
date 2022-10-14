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
];

const CucinaAVista = () => {
  return <PhotoGallery photos={photos} title={"cucina a vista"} />;
};

export default CucinaAVista;
