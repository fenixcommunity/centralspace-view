import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
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
    validate: PropTypes.object,
    properties: PropTypes.object
}

const InputTimepicker = ({ id, label, icon, iconColor, isDuplicated, validate, properties }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"

    const timepickerRef = useRef(null);

    useEffect(() => {
        if (properties) {
            M.Timepicker.init(timepickerRef.current, properties);
        }
    }, [properties]);

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {icon && <Icon icon={icon} iconColor={iconColor} />}
            <input
                id={id}
                type="text"
                className={`timepicker 
                ${validate ? "validate" : ""} 
                `}
                ref={timepickerRef}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

InputTimepicker.propTypes = propTypes;

export default InputTimepicker
