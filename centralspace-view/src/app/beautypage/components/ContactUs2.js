import React, { useEffect, useRef } from "react";
import '../../../resources/beautypage/css/radiobutton-checkbox.css';

function ContactUs2() {
  return (
    <div className="valign-wrapper">
      <div className="container">
        <form>
          <div className="row">
            <div className="col s12">
              <h2 className="section-title">Fill it!</h2>
            </div>

            <div className="col s12">
              <p>Services required:</p>
              <p>
                <label>
                  <input name="group1" type="radio" />
                  {/* <input name="group1" type="radio" checked={true} onChange={() => console.log("checked")}/> */}
                  <span>Red</span>
                </label>
              </p>
              <p>
                <label className="radio-label">
                  <input name="group1" type="radio" />
                  <span>Yellow</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="with-gap" name="group1" type="radio" />
                  <span>Green</span>
                </label>
              </p>
              <p>
                <label>
                  <input className="group1" type="radio" disabled="disabled" />
                  <span>Brown</span>
                </label>
              </p>
            </div>

            <div className="col s12">
              {/* <div className="input-field"> */}
                <p>Services required:</p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Photo Editing</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      name="filledin"
                      defaultValue="filledin"
                      className="filled-in"
                      defaultChecked="checked"
                    />
                    <span>Filled in</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      disabled="disabled"
                      defaultValue="Green"
                    />
                    <span>Green</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="checkbox"
                      disabled="disabled"
                      defaultValue="disabled"
                    />
                    <span>Brown</span>
                  </label>
                </p>
              {/* </div> */}
            </div>

            <div className="input-field col s12">
              <a className="waves-effect waves-light btn-large">Button</a>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs2;