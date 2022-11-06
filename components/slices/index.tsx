import { Slice } from "@prismicio/types";
import React, { Fragment } from "react";
import PhotoGallery from "../common/PhotoGallery";

const Slices = ({ slices }: { slices: Slice[] }) => {
  const _renderSlice = (slice: Slice): React.ReactNode => {
    switch (slice.slice_type) {
      case "immagini":
        return <PhotoGallery photos={slice.items} />;
      default:
        return <>NO SLICE</>;
    }
  };

  return (
    <>
      {slices.map((slice, i) => (
        <Fragment key={i}>{_renderSlice(slice)}</Fragment>
      ))}
    </>
  );
};

export default Slices;
