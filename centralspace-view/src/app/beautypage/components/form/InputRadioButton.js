import React from 'react'
//todo as global css?
import '../../../../resources/beautypage/css/radiobutton-checkbox.css';

function InputRadioButton(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const withGapStyle = props.withGapStyle ? "with-gap" : "";
    const options = props.options;

    return (
        <div className={`${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)}
            {props.groupName && options && options.map(option => {
                return (
                    <p>
                        <label className={`radio-label ${withGapStyle}`}>
                            <input name={props.groupName} type="radio"
                                disabled={option.disabled} defaultChecked={option.checked}
                                onChange={props.onChange} />
                            <span>{option.label}</span>
                        </label>
                    </p>
                )
            })}
        </div>
    )
}

export default InputRadioButton
