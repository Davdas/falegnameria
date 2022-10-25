import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio1.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio2.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio3.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio4.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio5.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio6.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio7.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio8.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio9.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio10.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio11.jpg",
  },
  {
    title: "armadio",
    text: "armadio",
    imgUrl: "armadi/armadio12.jpg",
  },

  
 

];

const CucinaAVista = () => {
  return <PhotoGallery photos={photos} title={"Armadi e Librerie"} />;
};

export default CucinaAVista;


