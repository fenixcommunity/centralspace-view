import React from "react";

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

const GoogleMaps = ({}) => {
  return <div className="section google-map" />;
}

GoogleMaps.propTypes = propTypes;

export default GoogleMaps;
