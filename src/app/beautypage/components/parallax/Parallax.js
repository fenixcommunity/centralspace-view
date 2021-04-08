import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';

const propTypes = {
  img: PropTypes.node.isRequired
}

const Parallax = ({ img }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    M.Parallax.init(parallaxRef.current, {});
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax" ref={parallaxRef}>
        <img src={img} alt="" className="responsive-img" />
      </div>
    </div>
  );
}

Parallax.propTypes = propTypes;

export default Parallax;
