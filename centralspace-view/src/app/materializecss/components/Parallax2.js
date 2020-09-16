import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import starsImg from '../../../resources/materializecss/project/img/stars.jpg';

function Parallax2() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallax = M.Parallax.init(parallaxRef.current, {});
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax" ref={parallaxRef}>
        <img src={starsImg} alt="" className="responsive-img" />
      </div>
    </div>
  );
}

export default Parallax2;
