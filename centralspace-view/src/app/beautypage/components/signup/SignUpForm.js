import React, { useEffect, useRef } from "react";
// todo remove after refactoring
import '../../../../resources/beautypage/css/radiobutton-checkbox.css';
import InputText from "../form/InputText";
import InputTextArea from "../form/InputTextArea";
import Inputdatepicker from "../form/Inputdatepicker";
import InputSelectOptions from "../form/InputSelectOptions";
import ActionButton from "../form/ActionButton";
import FormTemplate from "../form/FormTemplate";

function SignUpForm() {

  const formContent = (
    <>
      <InputText
        id="first_name" label="First Name" defaultValue="Vader"
        isDuplicated={true} validate={{ "dataLength": 10 }} />
      <InputText
        id="last_name" label="Last Name"
        isDuplicated={true} validate={{ "dataLength": 10 }} />
      <InputTextArea headerText="Text"
        id="description" label="Description" defaultValue={""}
        validate={{}} />
      <InputTextArea
        id="message" label="Your Message" defaultValue={""}
        icon="message" validate={{ "dataLength": 120 }} />
      <Inputdatepicker
        id="date" label="Choose a date"
        icon="date_range" validate={{}} />
      <InputSelectOptions
        id="basic_select" label="Choose your option" headerText="Options Select:"
        icon="playlist_add_check" validate={{}}
        options={
          [{ "value": 1, "label": "Option 1" }, { "value": 2, "label": "Option 2" }, { "value": 3, "label": "Option 3" }]
        } />
      <div className="input-field col s12">
        <ActionButton
          id="reset" label="Reset"
          icon="clear_all" color="grey" hasWaves={true}
          disabled={false} />
        <ActionButton
          id="save" label="Save"
          icon="send" hasWaves={true}
          disabled={false} type="submit" />
      </div>
    </>
  )

  return (
    <div className="section section-large-size light valign-wrapper">
      <div className="container">
        {/* todo wrapper class */}
        <FormTemplate
          headerText="Contact Us"
          formContent={formContent} />
      </div>
    </div>
  );
}

export default SignUpForm;
