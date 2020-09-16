import React, { useEffect, useRef } from "react";
import '../../../../../resources/gallery/css/gallery.css';
import M from 'materialize-css/dist/js/materialize.js';
import GalleryItems from "./GalleryItems.js"

function Gallery() {
  const optionSelectRef1 = useRef(null);
  const optionSelectRef2 = useRef(null);
  
  useEffect(() => {
    M.FormSelect.init(optionSelectRef1.current, {});
    M.FormSelect.init(optionSelectRef2.current, {});
  }, []);

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
