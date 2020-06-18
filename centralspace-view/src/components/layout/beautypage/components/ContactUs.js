import React, { useEffect, useRef } from "react";
import '../../../../resources/beautypage/css/datapicker.css';
import '../../../../resources/beautypage/css/radiobutton.css';
// import '../../../../resources/beautypage/css/materializenew.css'; //remove after
import M from 'materialize-css/dist/js/materialize.js';

function ContactUs() {
  const datepickerRef = useRef(null);
  const optionSelectRef1 = useRef(null);
  const optionSelectRef2 = useRef(null);

  useEffect(() => {
    let datepicker = M.Datepicker.init(datepickerRef.current, { disableWeekends: true, yearRange: 1 });
    M.FormSelect.init(optionSelectRef1.current, {});
    M.FormSelect.init(optionSelectRef2.current, {});
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
                id="description"
                className="materialize-textarea"
                defaultValue={""}
              />
              <label htmlFor="message">Description</label>
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
              <p>Options Select: </p>
              {/* or <label>Options Select</label> */}
              <select name="optionselect" id="color" ref={optionSelectRef1} defaultValue={0}>
                <option value={0} disabled={true}>
                  Choose your option
              </option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
              </select>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">playlist_add_check</i>
              <select name="optionselect" id="color" ref={optionSelectRef2} defaultValue={0}>
                <option value={0} disabled={true}>
                  Choose your option
              </option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
              </select>
            </div>

            <div className="input-field col s12">
              <button
                id="reset"
                className="btn waves-effect waves-light grey"
                type="button"
                name="reset"
              >
                Reset
              <i className="material-icons right">clear_all</i>
              </button>
              <span id="status" />
              <button
                id="save"
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Save
               <i className="material-icons right">send</i>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>

  );
}

export default ContactUs;
