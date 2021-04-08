import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import ValidateMessage from "../validation/ValidateMessage";
import Icon from "../../Icon";

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    isDuplicated: PropTypes.bool,
    autocomplete: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validate: PropTypes.object,
    formRegister: PropTypes.shape({
        register: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
        validate: PropTypes.func.isRequired
    }),
    onChange: PropTypes.func,
    onBlur: PropTypes.func
}

const InputText = ({ id, label, type, value, defaultValue, icon, iconColor, isDuplicated,
    autocomplete, required, disabled, validate, formRegister, onChange, onBlur }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const defaultValueAttr = defaultValue ? { "defaultValue": defaultValue } : {}
    const autoCompleteAttr = autocomplete === false ? { "autoComplete": "off" } : {}

    const customErrors = formRegister ? formRegister.errors : null;
    const inputError = customErrors && customErrors[id];
    const customValidationClass = formRegister ? "custom-validation" : "";
    const invalidClass = inputError ? "invalid" : "";

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

    const reference = (e) => {
        if (formRegister && formRegister.register) {
            formRegister.register(e, {
                // required: "This field is required",
                validate: formRegister.validate
                // pattern: {
                //     value: /^[A-Za-z]+$/i,
                //     message: 'This input is number only.'
                // }
            });
        }
        autocompleteRef.current = e;
    };

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <input
                id={id}
                name={id}
                type={`${type ? type : "text"}`}
                {...defaultValueAttr}
                value={value}
                className={`
                ${validate ? "validate" : ""} 
                ${customValidationClass} 
                ${invalidClass}
                ${autocomplete ? "autocomplete" : ""}
                `}
                required={required}
                disabled={disabled}
                {...autoCompleteAttr}
                {...validateLengthAttr}
                {...validateMinLengthAttr}
                {...validateMaxLengthAttr}
                ref={reference}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={id}>{label}</label>

            <ValidateMessage error={inputError} validate={validate} />
        </div>
    )
}

InputText.propTypes = propTypes;

export default InputText;
