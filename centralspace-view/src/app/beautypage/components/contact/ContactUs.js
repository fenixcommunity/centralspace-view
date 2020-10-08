import React from "react";
import ActionButton from "../helper/form/button/ActionButton";
import InputCheckbox from "../helper/form/input/InputCheckbox";
import InputRadioButtons from "../helper/form/input/InputRadioButtons";
import FormTemplate from "../helper/form/FormTemplate";
import BasicSection from "../helper/section/BasicSection";

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const ContactUs = ({ }) => {
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

ContactUs.propTypes = propTypes;

export default ContactUs;