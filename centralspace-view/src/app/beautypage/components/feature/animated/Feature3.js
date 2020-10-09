import React from "react";
import poly3 from '../../../../../resources/beautypage/images/blog/poly3.jpg';
import poly5 from '../../../../../resources/beautypage/images/blog/poly5.jpg';
import FullHeightSection from "../../helper/section/FullHeightSection";
import FeatureFadeRightInOut from "./FeatureFadeRightInOut";
import ImagePair from "./ImagePair";

const propTypes = {}

const Feature3 = () => {
  const content = (
    <div className="row valign-wrapper">
      <div className="col s12 m4">
        <div className="staggered-transition-wrapper">
          <FeatureFadeRightInOut
            title="This is a cool feature"
            content={
              <p>
                Locavore drinking vinegar quinoa seitan church-key, tilde
                aliqua. Hoodie mustache aliquip, selfies bitters poutine
                adipisicing scenester man braid jean shorts. Aliqua mlkshk
                90's distillery, truffaut sapiente trust fund fashion axe
          officia selvage occaecat locavore accusamus.{" "}
              </p>
            }
          />
        </div>
      </div>
      <div className="col s12 m8">
        <ImagePair backgroundImageUrlFirst={poly3} backgroundImageUrlSecond={poly5} />
      </div>
    </div>
  )

  return (
    <FullHeightSection
      theme="light"
      wrappedSection={content}
    />
  );
}

Feature3.propTypes = propTypes;

export default Feature3;
