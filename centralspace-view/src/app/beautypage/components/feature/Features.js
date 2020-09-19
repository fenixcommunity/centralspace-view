import React from "react";
import FeaturesBody from "./FeaturesBody";

function Features(props) {
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

export default Features;
