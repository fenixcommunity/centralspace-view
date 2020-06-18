import React, { useEffect, useRef } from "react";
import '../../../../resources/beautypage/css/radiobutton.css';

function ContactUs2() {
  useEffect(() => {
  }, []);
  return (
    <div className="light valign-wrapper">
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
