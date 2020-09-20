import React from "react";

function IntroductionAnimation(props) {
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

export default IntroductionAnimation;
