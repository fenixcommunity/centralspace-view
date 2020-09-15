import React, { useEffect, useRef } from "react";
import '../../../resources/gallery/css/gallery.css';
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
              <li>
                <a href="#sintel">
                  poly
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
            <ul className="categories container" data-filter="variant">
              <li>
                <div className="select-wrapper">
                  <span className="caret">▼</span>
                  <input
                    type="text"
                    className="select-dropdown"
                    readOnly={true}
                    data-activates="select-options-dcbb1aa5-825e-6232-dede-47054304aba6"
                    defaultValue="Color dropdown"
                  />
                  <ul
                    id="select-options-dcbb1aa5-825e-6232-dede-47054304aba6"
                    className="dropdown-content select-dropdown "
                  >
                    <li>
                      <span>Color dropdown</span>
                    </li>
                    <li>
                      <span>red</span>
                    </li>
                    <li>
                      <span>white</span>
                    </li>
                    <li>
                      <span>blue</span>
                    </li>
                  </ul>
                  <select name="color" className="initialized" defaultValue="all" ref={optionSelectRef1}>
                    <option value="all">
                      color
                  </option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                    <option value="blue">blue</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="select-wrapper">
                  <span className="caret">▼</span>
                  <input
                    type="text"
                    className="select-dropdown"
                    readOnly={true}
                    data-activates="select-options-daafc9a8-ceb8-e267-c556-01cc39cdc8bd"
                    defaultValue="size dropdown"
                  />
                  <ul
                    id="select-options-daafc9a8-ceb8-e267-c556-01cc39cdc8bd"
                    className="dropdown-content select-dropdown "
                  >
                    <li>
                      <span>size dropdown</span>
                    </li>
                    <li>
                      <span>small</span>
                    </li>
                    <li>
                      <span>medium</span>
                    </li>
                  </ul>
                  <select name="size" className="initialized" defaultValue="small" ref={optionSelectRef2}>
                    <option value="all">
                      size
                  </option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="categories-container">
            <ul className="categories container">
              <li class="active"><a href="#all">All</a></li>
              <li><a href="#overhead">Overhead</a></li>
              <li><a href="#sintel">Sintel</a></li>
            </ul>
          </div> */}

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
