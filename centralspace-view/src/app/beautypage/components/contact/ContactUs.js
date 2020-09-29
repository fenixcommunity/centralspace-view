import React from "react";
import ActionButton from "../form/button/ActionButton";
import InputCheckbox from "../form/input/InputCheckbox";
import InputRadioButtons from "../form/input/InputRadioButtons";
import FormTemplate from "../form/FormTemplate";
import BasicSection from "../helpers/BasicSection";

function ContactUs() {
  const handleInputRadioChange = () => {
    console.log("handleInputRadioChange");
  }

  const handleInputCheckboxChange = () => {
    console.log("handleInputCheckboxChange");
  }

  const formContent = (
    <>
      <InputRadioButtons
        groupName="radio_group"
        onChange={handleInputRadioChange}
        options=
        {[
          { label: "Red", checked: true },
          { label: "Yellow" },
          { label: "Green" },
          { label: "Brown", disabled: true }
        ]}
        headerText="Services required:" withGapStyle={true}
      />
      <InputCheckbox
        name="photo_editing" label="Photo editing" value={1}
        checked={true}
        onChange={handleInputCheckboxChange}
        headerText="Action required:" />
      <InputCheckbox
        name="filledin" label="Filled in" value="filledin"
        withFilledInStyle={true}
      />
      <InputCheckbox
        name="filledin" label="Green" value="green"
        disabled={true}
        withFilledInStyle={true}
      />

      <div className="input-field col s12">
        <ActionButton
          id="button" label="Button"
          hasWaves={true} buttonLarge={true} />
      </div>

    </>
  )

  return (
    <BasicSection
      wrappedSection={(
        <FormTemplate
          formId="contact_us"
          headerText="Contact Us"
          formContent={formContent} />
      )}
    />
  )
}

export default ContactUs;