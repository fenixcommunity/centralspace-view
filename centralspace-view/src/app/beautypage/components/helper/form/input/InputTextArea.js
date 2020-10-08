import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';
import ValidateMessage from '../validation/ValidateMessage';

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isDuplicated: PropTypes.bool,
    autocomplete: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.object
}

const InputTextArea = ({ id, label, type, defaultValue, icon, iconColor, isDuplicated, autocomplete, required, disabled, validate }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const defaultValueAttr = defaultValue ? { "defaultValue": defaultValue } : {}
    const autoCompleteAttr = autocomplete === false ? { "autoComplete": "off" } : {}

    const validateLengthAttribute = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <textarea
                id={id}
                {...defaultValueAttr}
                className={`materialize-textarea ${validate ? "validate" : ""}`}
                required={required}
                disabled={disabled}
                {...validateLengthAttribute}
                {...autoCompleteAttr}
            />
            <label htmlFor={id}>{label}</label>
            <ValidateMessage validate={validate} />
        </div>
    )
}

InputTextArea.propTypes = propTypes;

export default InputTextArea;
