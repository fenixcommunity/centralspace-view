import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import ValidateMessage from "../validation/ValidateMessage";
import Icon from "../../Icon";

function InputText(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const defaultValueAttr = props.defaultValue ? { "defaultValue": props.defaultValue } : {}
    const autoCompleteAttr = props.autocomplete === false ? { "autoComplete": "off" } : {}

    const validate = props.validate;
    const validateLengthAttr = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}
    const validateMinLengthAttr = validate && validate.minLength ? { "minLength": validate.minLength } : {}
    const validateMaxLengthAttr = validate && validate.maxLength ? { "maxLength": validate.maxLength } : {}

    const autocompleteRef = useRef(null);

    useEffect(() => {
        if (props.autocomplete) {
            const dataToAutocomplete = props.autocomplete.dataToAutocomplete;
            const instance = initAutocomplete(dataToAutocomplete ? dataToAutocomplete : {});
            // instance.updateData({...});
        }
    }, []);

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
            {props.icon && <Icon icon={props.icon} iconColor={props.iconColor} />}
            <input
                id={props.id}
                type={`${props.type ? props.type : "text"}`}
                {...defaultValueAttr}
                className={`
                ${validate ? "validate" : ""} 
                ${props.autocomplete ? "autocomplete" : ""}
                `}
                required={props.required}
                disabled={props.disabled}
                {...autoCompleteAttr}
                {...validateLengthAttr}
                {...validateMinLengthAttr}
                {...validateMaxLengthAttr}
                ref={autocompleteRef}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <ValidateMessage validate={validate} />
        </div>
    )
}

export default InputText;
