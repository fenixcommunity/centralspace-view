import React, { useEffect } from "react";
import '../../../resources/gallery/css/gallery.css';
import GalleryItems from "./GalleryItems.js"

function Gallery() {

  useEffect(() => {
  }, []);

  return (
    <>
      <nav className="nav-extended">

        <div className="categories-wrapper">
          <div className="categories-container pin-top">
            <ul className="categories container" data-filter="type">
              <li className>
                <a href="#all">
                  All
              </a>
              </li>
              <li className>
                <a href="#overhead">
                  Big Bang
              </a>
              </li>
              <li className>
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
              <li className>
                <a href="#all">
                  All
              </a>
              </li>
              <li className="active">
                <a href="#sintel">
                  circle
              </a>
              </li>
              <li className>
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
                    readOnly="true"
                    data-activates="select-options-dcbb1aa5-825e-6232-dede-47054304aba6"
                    defaultValue="Color dropdown"
                  />
                  <ul
                    id="select-options-dcbb1aa5-825e-6232-dede-47054304aba6"
                    className="dropdown-content select-dropdown "
                  >
                    <li className>
                      <span>Color dropdown</span>
                    </li>
                    <li className>
                      <span>red</span>
                    </li>
                    <li className>
                      <span>white</span>
                    </li>
                    <li className>
                      <span>blue</span>
                    </li>
                  </ul>
                  <select name="color" className="initialized">
                    <option selected value="all">
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
                    readOnly="true"
                    data-activates="select-options-daafc9a8-ceb8-e267-c556-01cc39cdc8bd"
                    defaultValue="size dropdown"
                  />
                  <ul
                    id="select-options-daafc9a8-ceb8-e267-c556-01cc39cdc8bd"
                    className="dropdown-content select-dropdown "
                  >
                    <li className>
                      <span>size dropdown</span>
                    </li>
                    <li className>
                      <span>small</span>
                    </li>
                    <li className>
                      <span>medium</span>
                    </li>
                  </ul>
                  <select name="size" className="initialized">
                    <option selected value="all">
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
