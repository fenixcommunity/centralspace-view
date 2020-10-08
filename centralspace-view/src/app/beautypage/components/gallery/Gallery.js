import React from "react";
import '../../../../resources/gallery/css/gallery.css';
import NavCategories from "../other/NavCategories";
import GalleryContainer from "./GalleryContainer";
import GalleryItems from "./GalleryItems.js"

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const Gallery = ({}) => {

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

Gallery.propTypes = propTypes;

export default Gallery;
