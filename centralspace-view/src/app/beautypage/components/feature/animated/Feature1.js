import React from "react";
import poly1 from '../../../../../resources/beautypage/images/blog/poly1.jpg';
import FullHeightSection from "../../helper/section/FullHeightSection";
import PerspectiveWrapper from "./PerspectiveWrapper";
import PhonePreview from "./PhonePreview";

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

const Feature1 = ({ }) => {
  const basicMessage = (
    <p>
      Locavore drinking vinegar quinoa seitan church-key, tilde
      aliqua. Hoodie mustache aliquip, selfies bitters poutine
      adipisicing scenester man braid jean shorts. Aliqua mlkshk
      90's distillery, truffaut sapiente trust fund fashion axe
      officia selvage occaecat locavore accusamus.
    </p>
  )

  const content = (
    <div className="row">
      <div className="col m3">
        <PerspectiveWrapper
          leftOrientation={true}
          title="Cool feature"
          content={basicMessage}
        />
        <PerspectiveWrapper
          leftOrientation={true}
          title="Cool feature"
          content={basicMessage}
        />
      </div>
      <div className="col m6">
        <PhonePreview backgroundImageUrl={poly1} />
      </div>
      <div className="col m3">
        <PerspectiveWrapper
          title="Cool feature"
          content={basicMessage}
        />
        <PerspectiveWrapper
          title="Cool feature"
          content={basicMessage}
        />
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

Feature1.propTypes = propTypes;

export default Feature1;
