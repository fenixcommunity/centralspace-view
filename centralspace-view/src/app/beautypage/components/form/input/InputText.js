import React from 'react'

function InputText(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const defaultValueAttr = props.defaultValue ? { "defaultValue": props.defaultValue } : {}

    const validate = props.validate;
    const validateLengthAttr = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
            <input
                id={props.id}
                type="text"
                {...defaultValueAttr}
                className={`${validate ? "validate" : ""}`}
                {...validateLengthAttr}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default InputText;
