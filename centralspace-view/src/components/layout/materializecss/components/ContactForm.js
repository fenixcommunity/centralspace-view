import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function ContactForm() {
  const datepickerRef = useRef(null);

  useEffect(() => {
    let datepicker = M.Datepicker.init(datepickerRef.current, { disableWeekends: true, yearRange: 1 });
  }, []);

  return (
    <section className="section container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
          <h2 className="indigo-text text-darken-4">Get in Touch</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
            </p>
          <p>
            Mauris dolor augue, vulputate in pharetra ac, facilisis nec
            libero. Fusce condimentum gravida urna, vitae scelerisque erat
            ornare nec.
            </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.
            </p>
          <p>
            Mauris dolor augue, vulputate in pharetra ac, facilisis nec
            libero. Fusce condimentum gravida urna, vitae scelerisque erat
            ornare nec.
            </p>
        </div>
        <div className="col s12 l5 offset-l2">
          <form>
            <div className="input-field">
              <p>Options Select: </p>
              {/* or <label>Options Select</label> */}
              <select name="optionselect" id="color" defaultValue={0}>
                <option value={0} disabled={true}>
                  Choose your option
              </option>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
              </select>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input type="email" id="email" className="validate"/>
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-field">
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

            <div className="input-field">
              <i className="material-icons prefix">date_range</i>
              <input type="text" id="date" className="datepicker" ref={datepickerRef} />
              <label htmlFor="date">Choose a date you need me for...</label>
            </div>
            
            <div className="input-field left">
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

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
