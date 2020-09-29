import React, { useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.js';
import '../../../../../resources/beautypage/css/radiobutton-checkbox.css';

function InputSelectOptions(props) {
    const optionSelectRef = useRef(null);

    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const validate = props.validate;

    useEffect(() => {
        M.FormSelect.init(optionSelectRef.current, {});
    }, []);
    return (
        <div className={`input-field col ${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)} {/* or <label>Options Select</label> */}
            {props.icon && (<i className="material-icons prefix">{props.icon}</i>)}
            <select name="optionselect" id="color" ref={optionSelectRef} defaultValue={0}>
                {props.label && (
                    <option value={0} disabled={true}>
                        {props.label}
                    </option>
                )}
                {props.options.map(option => {
                    return (
                        <option value={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default InputSelectOptions;
