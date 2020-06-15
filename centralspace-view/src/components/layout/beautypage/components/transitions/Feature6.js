import React from "react";

class Feature6 extends React.Component {
  render() {
    return (
      <div className="section black full-height">
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
                <div className="phone-preview-sizer iphone">
                  <div className="phone-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/530x990)"
                    }}
                  />
                </div>
                <div className="phone-preview-sizer iphone left-in-out">
                  <div className="phone-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/530x990)"
                    }}
                  />
                </div>
                <div className="phone-preview-sizer iphone right-in-out">
                  <div className="phone-preview" />
                  <div
                    className="image-container default"
                    style={{
                      backgroundImage: "url(http://placehold.it/530x990)"
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

export default Feature6;
