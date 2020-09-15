
import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import backgroundStars from '../../../../resources/beautypage/images/backgroundStars.jpg';

function StarsParallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallax = M.Parallax.init(parallaxRef.current, {});
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax" ref={parallaxRef}>
        <img src={backgroundStars} alt="" className="responsive-img" />
      </div>
    </div>
  );
}

export default StarsParallax;
