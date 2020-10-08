import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import Icon from "../../Icon";

function InputTimepicker(props) {
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

export default InputTimepicker
