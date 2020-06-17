import React from "react";

function Features() {
  return (
    <div className="section black valign-wrapper">
      <div className="row valign">
        <div className="col s12 m10 offset-m1">
          <div className="row">
            <div className="col s12">
              <h2 className="section-title">Features</h2>
            </div>
          </div>
          <div
            className="row staggered-transition-wrapper"
            data-duration={0}
            data-staggereddelay=".9"
          >
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-light-bulb" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-bolt" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-rocket" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-settings" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-umbrella" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
            <div className="col s12 m6 l4 fade-in-out">
              <h4>
                <i className="icon-compass" />
              </h4>
              <p className="caption">
                This is a cool feature about your product! It really separates
                you from the crowd.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
