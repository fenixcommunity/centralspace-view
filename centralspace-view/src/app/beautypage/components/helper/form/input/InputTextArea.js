import React from 'react'
import Icon from '../../Icon';
import ValidateMessage from '../validation/ValidateMessage';

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

const InputTextArea = ({}) => {
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

InputTextArea.propTypes = propTypes;

export default InputTextArea;
