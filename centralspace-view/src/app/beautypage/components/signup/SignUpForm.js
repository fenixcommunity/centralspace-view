import React from "react";
import InputText from "../form/input/InputText";
import InputTextArea from "../form/input/InputTextArea";
import Inputdatepicker from "../form/input/InputDatepicker";
import InputSelectOptions from "../form/input/InputSelectOptions";
import ActionButton from "../form/button/ActionButton";
import FormTemplate from "../form/FormTemplate";
import BasicSection from "../helper/BasicSection";

function SignUpForm() {

  const formContent = (
    <>
      <InputText
        id="first_name" label="First Name" defaultValue="Vader"
        isDuplicated={true} validate={{ dataLength: 10 }} />
      <InputText
        id="last_name" label="Last Name"
        isDuplicated={true} validate={{ dataLength: 10 }} />
      <InputTextArea headerText="Text"
        id="description" label="Description" defaultValue={""}
        validate={{}} />
      <InputTextArea
        id="message" label="Your Message" defaultValue={""}
        icon="message" validate={{ dataLength: 120 }} />
      <Inputdatepicker
        id="date" label="Choose a date"
        icon="date_range" validate={{}} />
      <InputSelectOptions
        id="basic_select" label="Choose your option" headerText="Options Select:"
        icon="playlist_add_check" validate={{}}
        options={
          [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }]
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
    <BasicSection
      theme="light"
      wrappedSection={(
        <FormTemplate
          formId="sign_up_form"
          headerText="Sign up"
          formContent={formContent} />
      )}
    />
  )
}

export default SignUpForm;
