import React from "react";
import FeaturesBody from "./FeaturesBody";

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

const Features = ({}) => {
  const isExtended = props.isExtended;

  const featuresTitle = (
    <div className="col s12">
      <h2 className="section-title">Features</h2>
    </div>
  )

  const featuresWrapper = isExtended ? (
    <div className="row valign">
      <div className="col s12 m10 offset-m1">
        <div className="row">
          {featuresTitle}
        </div>
        <FeaturesBody hasAnimation={props.hasAnimation} />
      </div>
    </div>
  ) :
   (
      <div className="container">
        <div className="row">
          {featuresTitle}
          <FeaturesBody hasAnimation={props.hasAnimation} />
        </div>
      </div>
    );

  return (
    <div className="section valign-wrapper">
      {featuresWrapper}
    </div>
  );
}

Features.propTypes = propTypes;

export default Features;
