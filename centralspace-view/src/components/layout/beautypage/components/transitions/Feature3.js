import React from "react";
import poly3 from '../../../../../resources/beautypage/images/blog/poly3.jpg';
import poly5 from '../../../../../resources/beautypage/images/blog/poly5.jpg';

function Feature3() {
  return (
    <div className="section light full-height">
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s12 m4">
            <div className="staggered-transition-wrapper">
              <div className="feature fade-right-in-out">
                <h3>This is a cool feature</h3>
                <p>
                  Locavore drinking vinegar quinoa seitan church-key, tilde
                  aliqua. Hoodie mustache aliquip, selfies bitters poutine
                  adipisicing scenester man braid jean shorts. Aliqua mlkshk
                  90's distillery, truffaut sapiente trust fund fashion axe
                    officia selvage occaecat locavore accusamus.{" "}
                </p>
              </div>
              <div className="feature fade-right-in-out">
                <h3>This is a cool feature</h3>
                <p>
                  Locavore drinking vinegar quinoa seitan church-key, tilde
                  aliqua. Hoodie mustache aliquip, selfies bitters poutine
                  adipisicing scenester man braid jean shorts. Aliqua mlkshk
                  90's distillery, truffaut sapiente trust fund fashion axe
                    officia selvage occaecat locavore accusamus.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m8">
            <div className="device-pair">
              <div className="tablet-preview-sizer">
                <div className="tablet-preview" />
                <div
                  className="image-container default"
                  style={{
                    backgroundImage: `url(${poly3})`
                  }}
                />
              </div>
              <div className="tablet-preview-sizer left-in-out">
                <div className="tablet-preview" />
                <div
                  className="image-container default"
                  style={{
                    backgroundImage: `url(${poly5})`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature3;