
import React from "react";
import backgroundStars from '../../../../resources/beautypage/images/backgroundStars.jpg';
import Parallax from "./Parallax";

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

const StarsParallax = ({}) => {

  return (
    <Parallax img={backgroundStars} />
  )
}

StarsParallax.propTypes = propTypes;

export default StarsParallax;
