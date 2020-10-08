import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import ValidateMessage from "../validation/ValidateMessage";
import Icon from "../../Icon";

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

const InputText = ({ id, label, type, defaultValue, icon, iconColor, isDuplicated, autocomplete, required, disabled, validate }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const defaultValueAttr = defaultValue ? { "defaultValue": defaultValue } : {}
    const autoCompleteAttr = autocomplete === false ? { "autoComplete": "off" } : {}

    const validate = validate;
    const validateLengthAttr = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    const validateMinLengthAttr = validate && validate.minLength ? { "minLength": validate.minLength } : {}
    const validateMaxLengthAttr = validate && validate.maxLength ? { "maxLength": validate.maxLength } : {}

    const autocompleteRef = useRef(null);

    useEffect(() => {
        if (autocomplete) {
            const dataToAutocomplete = autocomplete.dataToAutocomplete;
            initAutocomplete(dataToAutocomplete ? dataToAutocomplete : {});
            // instance.updateData({...});
        }
    }, [autocomplete]);

    const initAutocomplete = (dataToAutocomplete) => {
        return M.Autocomplete.init(
            autocompleteRef.current,
            {
                data: dataToAutocomplete,
                minLength: 1,
                limit: 20,
                sortFunction: (a, b, inputString) => {
                    return a.indexOf(inputString) - b.indexOf(inputString);
                },
                onAutocomplete: (inputString) => { alert("Done!") }
            }
        );
    }

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <input
                id={id}
                type={`${type ? type : "text"}`}
                {...defaultValueAttr}
                className={`
                ${validate ? "validate" : ""} 
                ${autocomplete ? "autocomplete" : ""}
                `}
                required={required}
                disabled={disabled}
                {...autoCompleteAttr}
                {...validateLengthAttr}
                {...validateMinLengthAttr}
                {...validateMaxLengthAttr}
                ref={autocompleteRef}
            />
            <label htmlFor={id}>{label}</label>
            <ValidateMessage validate={validate} />
        </div>
    )
}

InputText.propTypes = propTypes;

export default InputText;
