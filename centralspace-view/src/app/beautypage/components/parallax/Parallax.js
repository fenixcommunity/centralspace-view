import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function Parallax(props) {
    const parallaxRef = useRef(null);

    useEffect(() => {
      M.Parallax.init(parallaxRef.current, {});
    }, []);
  
    return (
      <div className="parallax-container">
        <div className="parallax" ref={parallaxRef}>
          <img src={props.img} alt="" className="responsive-img" />
        </div>
      </div>
    );
}

export default Parallax;
