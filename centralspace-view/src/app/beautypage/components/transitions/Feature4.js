import React from "react";
import poly1 from '../../../../resources/beautypage/images/blog/poly1.jpg';
import poly6 from '../../../../resources/beautypage/images/blog/poly6.jpg';

function Feature4() {
  return (
    <div className="section black full-height">
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s12 m8">
            <div className="device-pair right-side">
              <div className="tablet-preview-sizer white">
                <div className="tablet-preview" />
                <div
                  className="image-container default"
                  style={{
                    backgroundImage: `url(${poly1})`
                  }}
                />
              </div>
              <div className="tablet-preview-sizer white right-in-out">
                <div className="tablet-preview" />
                <div
                  className="image-container default"
                  style={{
                    backgroundImage: `url(${poly6})`
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="staggered-transition-wrapper">
              <div className="feature fade-left-in-out">
                <h3>This is a cool feature</h3>
                <p>
                  Locavore drinking vinegar quinoa seitan church-key, tilde
                  aliqua. Hoodie mustache aliquip, selfies bitters poutine
                  adipisicing scenester man braid jean shorts. Aliqua mlkshk
                  90's distillery, truffaut sapiente trust fund fashion axe
                    officia selvage occaecat locavore accusamus.{" "}
                </p>
              </div>
              <div className="feature fade-left-in-out">
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
        </div>
      </div>
    </div>
  );
}

export default Feature4;
