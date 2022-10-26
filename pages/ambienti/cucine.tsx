import React from "react";
import PhotoGallery, { IPhoto } from "../../components/common/PhotoGallery";

const photos: IPhoto[] = [
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina1.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina2.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina3.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina4.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina5.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina6.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina7.jpg",
  },

  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina8.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina8.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina9.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina10.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina11.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina12.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina14.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina15.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina16.jpg",
  },
  {
    title: "cucina",
    text: "cucina",
    imgUrl: "cucine/cucina17.jpg",
  },
];

const Cucina = () => {
  return <PhotoGallery photos={photos} title={"cucina"} />;
};

export default Cucina;
