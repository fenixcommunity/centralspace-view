import React from "react";
import InputText from "../helper/form/input/InputText";
import InputTextArea from "../helper/form/input/InputTextArea";
import Inputdatepicker from "../helper/form/input/InputDatepicker";
import InputSelect from "../helper/form/input/InputSelect";
import ActionButton from "../helper/form/button/ActionButton";
import FormTemplate from "../helper/form/FormTemplate";
import BasicSection from "../helper/section/BasicSection";

const propTypes = {}

const SignUpForm = () => {

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
      <InputSelect
        id="basic_select" label="Choose your option" headerText="Options Select:"
        icon="playlist_add_check" properties={{}} validate={{}}
        options={
          [{ value: 1, label: "Option 1" }, { value: 2, label: "Option 2" }, { value: 3, label: "Option 3" }]
        } />
      <div className="input-field col s12">
        <ActionButton
          id="reset" label="Reset"
          icon="clear_all" iconPossition="right" color="grey"
          hasWaves={true} disabled={false} />
        <ActionButton
          id="save" label="Save" type="submit"
          icon="send" iconPossition="right"
          hasWaves={true} disabled={false} />
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

SignUpForm.propTypes = propTypes;

export default SignUpForm;
