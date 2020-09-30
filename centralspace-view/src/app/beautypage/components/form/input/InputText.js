import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';

function InputText(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const defaultValueAttr = props.defaultValue ? { "defaultValue": props.defaultValue } : {}

    const validate = props.validate;
    const validateLengthAttr = validate && validate.dataLength ? { "data-length": validate.dataLength } : {}

    const autocompleteRef = useRef(null);

    useEffect(() => {
        if (props.autocomplete) {
            const dataToAutocomplete = props.autocomplete.dataToAutocomplete;
            const instance = initAutocomplete(dataToAutocomplete ? dataToAutocomplete : {});
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
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
            <input
                id={props.id}
                type={`${props.password ? "password" : "text"}`}
                {...defaultValueAttr}
                className={`
                ${validate ? "validate" : ""} 
                ${props.autocomplete ? "autocomplete" : ""}
                `}
                {...validateLengthAttr}
                ref={autocompleteRef}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default InputText;
