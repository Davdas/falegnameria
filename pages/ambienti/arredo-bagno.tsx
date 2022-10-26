import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno1.png",
  },
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno2.png",
  },
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno3.png",
  },
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno4.png",
  },
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno5.png",
  },
  {
    title: "arredo bagno",
    text: "arredo bagno",
    imgUrl: "bagno/bagno6.png",
  },
];

const ArredoBagno = () => {
  return <PhotoGallery photos={photos} title={"Arredo Bagno"} />;
};

export default ArredoBagno;
