import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.js';
import Icon from "../../Icon";

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

const InputTimepicker = ({ }) => {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;

    const timepickerRef = useRef(null);

    useEffect(() => {
        if (props.properties) {
            M.Timepicker.init(timepickerRef.current, props.properties);
        }
    }, [props.properties]);

    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.icon && <Icon icon={props.icon} iconColor={props.iconColor}/>}
            <input
                id={props.id}
                type="text"
                className={`timepicker 
                ${validate ? "validate" : ""} 
                `}
                ref={timepickerRef}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

InputTimepicker.propTypes = propTypes;

export default InputTimepicker
