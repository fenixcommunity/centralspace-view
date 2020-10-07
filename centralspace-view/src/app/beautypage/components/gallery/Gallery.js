import React from "react";
import '../../../../resources/gallery/css/gallery.css';
import NavCategories from "../other/NavCategories";
import GalleryContainer from "./GalleryContainer";
import GalleryItems from "./GalleryItems.js"

function Gallery() {

  return (
    <>
      <NavCategories categories={[
        {
          name: "type",
          items: [
            { label: "All", reference: "#all" },
            { label: "Big Bang", reference: "#overhead" },
            { label: "Sacred Geometry", reference: "#sintel", active: true }
          ]
        },
        {
          name: "tag",
          items: [
            { label: "All", reference: "#all" },
            { label: "circle", reference: "#sintel" },
            { label: "Hexagon", reference: "#overhead" }
          ]
        }
      ]} />

      <GalleryContainer items={
        <GalleryItems />
      } />

    </>

  );
}

export default Gallery;
