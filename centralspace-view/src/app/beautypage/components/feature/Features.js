import React from "react";
import FeaturesBody from "./FeaturesBody";

const propTypes = {
  isExtended: PropTypes.bool,
  hasAnimation: PropTypes.bool
}

const Features = ({ isExtended, hasAnimation }) => {

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
        <FeaturesBody hasAnimation={hasAnimation} />
      </div>
    </div>
  ) :
    (
      <div className="container">
        <div className="row">
          {featuresTitle}
          <FeaturesBody hasAnimation={hasAnimation} />
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
