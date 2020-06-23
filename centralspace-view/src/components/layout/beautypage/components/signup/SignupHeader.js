import React from "react";
import backgroundSignup from '../../../../../resources/beautypage/images/backgroundSignup.jpg';

function SignupHeader() {
  return (
    <div className="section header">
      <img className="background" src={backgroundSignup} />
      <div className="header-wrapper row valign-wrapper">
        <div className="col s12">
          <h1>Sign Up</h1>
          <span className="tagline">
            Join with  us and discover the unknown!
            </span>
          <button className="read-more">
            <i className="icon-caret-down" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupHeader;