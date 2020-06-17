import React from "react";

function ContactUs() {
  return (
    <div className="section light valign-wrapper">
      <div className="container">
        <form>
          <div className="row">
            <div className="col s12">
              <h2 className="section-title">Contact Us</h2>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" length="2" />
              {/* <input id="first_name" className="autocomplete" type="text" /> */}
              {/* remove styles from index.css */}
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field col s12">
              <textarea
                id="message"
                className="materialize-textarea"
                defaultValue={""}
              />
              <label htmlFor="message">Message</label>
              <a className="waves-effect waves-light btn-large">Button</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
