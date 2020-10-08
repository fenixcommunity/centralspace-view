import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';

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

const Parallax = ({}) => {
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

Parallax.propTypes = propTypes;

export default Parallax;
