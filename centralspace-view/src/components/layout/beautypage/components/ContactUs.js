import React, { useEffect, useRef } from "react";
import '../../../../resources/beautypage/css/datapicker.css';
import M from 'materialize-css/dist/js/materialize.js';

function ContactUs() {
  const datepickerRef = useRef(null);

  useEffect(() => {
    let datepicker = M.Datepicker.init(datepickerRef.current, { disableWeekends: true, yearRange: 1 });
    // M.AutoInit();
  }, []);
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
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
              <textarea
                id="message"
                className="materialize-textarea"
                cols={20}
                rows={20}
                defaultValue={""}
              />
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">date_range</i>
              <input type="text" id="date" className="datepicker" ref={datepickerRef} />
              {/* <input type="text" id="date" className="datepicker"  /> */}
              <label htmlFor="date">Choose a date</label>
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

export default ContactUs;
