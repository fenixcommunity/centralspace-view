import React from "react";
import poly3 from '../../../../../resources/beautypage/images/blog/poly3.jpg';
import poly6 from '../../../../../resources/beautypage/images/blog/poly6.jpg';
import FullHeightSection from "../../helper/section/FullHeightSection";
import FeatureHeader from "./FeatureHeader";
import PhonePreviewSize from "./PhonePreviewSize";

const propTypes = {}

const Feature2 = ({ }) => {
  const content = (
    <div className="row">
      <div className="col s12 m8 offset-m2">
        <FeatureHeader
          title="This is a cool feature"
          content={
            <p>
              Locavore drinking vinegar quinoa seitan church-key, tilde
              aliqua. Hoodie mustache aliquip, selfies bitters poutine
              adipisicing scenester man braid jean shorts. Aliqua mlkshk
              90's distillery, truffaut sapiente trust fund fashion axe
              officia selvage occaecat locavore accusamus.
                </p>
          }
        />
        <div className="device-triplet">
          <PhonePreviewSize backgroundImageUrl={poly6} />
          <PhonePreviewSize backgroundImageUrl={poly3} orientation="left" />
          <PhonePreviewSize backgroundImageUrl={poly3} orientation="right" />
        </div>
      </div>
    </div>
  )
  return (
    <FullHeightSection
      theme="black"
      wrappedSection={content}
    />
  );

}

Feature2.propTypes = propTypes;

export default Feature2;
