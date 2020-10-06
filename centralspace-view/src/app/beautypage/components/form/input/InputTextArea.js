import React from 'react'
import ValidateMessage from '../validation/ValidateMessage';

function InputTextArea(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const defaultValueAttr = props.defaultValue ? { "defaultValue": props.defaultValue } : {}

    const validate = props.validate;
    const validateLengthAttribute = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
            <textarea
                id={props.id}
                {...defaultValueAttr}
                className={`materialize-textarea ${validate ? "validate" : ""}`}
                {...validateLengthAttribute}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <ValidateMessage validate={validate} />
        </div>
    )
}

export default InputTextArea;
