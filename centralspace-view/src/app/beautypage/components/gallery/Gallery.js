import React from "react";
import '../../../../resources/gallery/css/gallery.css';
import GalleryItems from "./GalleryItems.js";
import NavCategories from "../other/NavCategories.js";
import GalleryContainer from "./GalleryContainer";

function Gallery() {
  return (
    <>
      <NavCategories
        categories={[
          {
            name: "type",
            items: [
              { label: "All", reference: "#all" },
              { label: "Big Bang", reference: "#overhead" },
              { label: "Sacred Geometry", reference: "#sintel", active: true },
            ]
          },
          {
            name: "tag",
            items: [
              { label: "All", reference: "#all" },
              { label: "circle", reference: "#sintel" },
              { label: "Hexagon", reference: "#overhead", active: true },
            ]
          },
        ]}
      />
      <GalleryContainer items={<GalleryItems />} />
    </>

  );
}

export default Gallery;
