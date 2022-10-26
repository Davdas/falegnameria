import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera1.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera2.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera3.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera4.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera5.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera6.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera7.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera8.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera9.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera10.png",
  },
  {
    title: "camera da letto",
    text: "camera da letto",
    imgUrl: "cameraDaLetto/camera11.png",
  },
];

const CameraDaLetto = () => {
  return <PhotoGallery photos={photos} title={"camera da letto"} />;
};

export default CameraDaLetto;
