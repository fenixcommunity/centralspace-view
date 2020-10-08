import React from "react";
import PropTypes from 'prop-types';

const propTypes = {
  headerMessage: PropTypes.string.isRequired,
  sentenceMessage: PropTypes.string.isRequired
}

const IntroductionAnimation = ({ headerMessage, sentenceMessage }) => {
  return (
    <div className="title-transition section white valign-wrapper">
      <div className="row valign">
        <div className="col s8 offset-s2 m6 offset-m3 blog-title fade-transition">
          <h1>{headerMessage}</h1>
          <span className="date">{sentenceMessage}</span>
        </div>
      </div>
    </div>
  );
}

IntroductionAnimation.propTypes = propTypes;

export default IntroductionAnimation;
