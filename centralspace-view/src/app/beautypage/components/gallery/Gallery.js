import React from "react";
import '../../../../resources/gallery/css/gallery.css';
import GalleryItems from "./GalleryItems.js"

function Gallery() {

  return (
    <>
      <nav className="nav-extended">

        <div className="categories-wrapper">
          <div className="categories-container pin-top">
            <ul className="categories container" data-filter="type">
              <li>
                <a href="#all">
                  All
              </a>
              </li>
              <li>
                <a href="#overhead">
                  Big Bang
              </a>
              </li>
        
              <li className="active">
                <a href="#sintel">
                  Sacred Geometry
              </a>
              </li>
            </ul>
            <ul className="categories container" data-filter="tag">
              <li>
                <a href="#all">
                  All
              </a>
              </li>
              <li className="active">
                <a href="#sintel">
                  circle
              </a>
              </li>
              <li>
                <a href="#overhead">
                  Hexagon
              </a>
              </li>
            </ul>
    
          </div>
        </div>

      </nav>

      <div id="portfolio" className="gray">
        <div className="container">
          <div className="gallery row">
            <GalleryItems />
          </div>
        </div>
      </div>

    </>

  );
}

export default Gallery;
