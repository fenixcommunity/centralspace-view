import React from 'react'
import Icon from '../../Icon';
import ValidateMessage from '../validation/ValidateMessage';

function InputTextArea(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const defaultValueAttr = props.defaultValue ? { "defaultValue": props.defaultValue } : {}
    const autoCompleteAttr = props.autocomplete === false ? { "autoComplete": "off" } : {}

    const validate = props.validate;
    const validateLengthAttribute = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && <Icon icon={props.icon} iconColor={props.iconColor} />}
            <textarea
                id={props.id}
                {...defaultValueAttr}
                className={`materialize-textarea ${validate ? "validate" : ""}`}
                required={props.required}
                disabled={props.disabled}
                {...validateLengthAttribute}
                {...autoCompleteAttr}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <ValidateMessage validate={validate} />
        </div>
    )
}

export default InputTextArea;
