import React from "react";

class Feature5 extends React.Component {
  render() {
    return (
      <div className="section light full-height">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <div className="feature">
                <h3>This is a cool feature</h3>
                <p>
                  Locavore drinking vinegar quinoa seitan church-key, tilde
                  aliqua. Hoodie mustache aliquip, selfies bitters poutine
                  adipisicing scenester man braid jean shorts. Aliqua mlkshk
                  90's distillery, truffaut sapiente trust fund fashion axe
                  officia selvage occaecat locavore accusamus.{" "}
                </p>
              </div>
              <div className="device-triplet">
                <div className="tablet-preview-sizer">
                  <div className="tablet-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/600x400)"
                    }}
                  />
                </div>
                <div className="tablet-preview-sizer left-in-out">
                  <div className="tablet-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/600x400)"
                    }}
                  />
                </div>
                <div className="tablet-preview-sizer right-in-out">
                  <div className="tablet-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/600x400)"
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
}

export default Feature5;
