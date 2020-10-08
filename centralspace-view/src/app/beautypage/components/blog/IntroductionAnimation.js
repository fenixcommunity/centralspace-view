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

const IntroductionAnimation = ({}) => {
  return (
    <div className="title-transition section white valign-wrapper">
      <div className="row valign">
        <div className="col s8 offset-s2 m6 offset-m3 blog-title fade-transition">
          <h1>{props.headerMessage}</h1>
          <span className="date">{props.sentenceMessage}</span>
        </div>
      </div>
    </div>
  );
}

IntroductionAnimation.propTypes = propTypes;

export default IntroductionAnimation;
