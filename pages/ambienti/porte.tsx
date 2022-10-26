import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte1.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte2.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte3.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte4.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte5.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte6.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte7.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte8.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte9.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte10.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte11.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte12.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte13.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte14.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte15.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte16.png",
  },
  {
    title: "porte",
    text: "porte",
    imgUrl: "porte/porte17.png",
  },
];

const Porte = () => {
  return <PhotoGallery photos={photos} title={"Porte"} />;
};

export default Porte;
