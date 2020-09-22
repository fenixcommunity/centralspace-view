import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import streetImg from '../../../resources/materializecss/project/img/street.jpg';

function Parallax1() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallax = M.Parallax.init(parallaxRef.current, {});
  }, []);

  return (
    <div className="container">
    <div className="parallax-container">
      <div className="parallax" ref={parallaxRef}>
        <img src={streetImg} alt="" className="responsive-img" />
      </div>
    </div>
    </div>
  );
}

export default Parallax1;