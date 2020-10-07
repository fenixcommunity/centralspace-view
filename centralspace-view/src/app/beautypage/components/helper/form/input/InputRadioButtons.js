import React from 'react'
//todo as global css?
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import { generateKey } from '../../../../utils/keyGenerator';

function InputRadioButtons(props) {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const withGapStyle = props.withGapStyle ? "with-gap" : "";
    const options = props.options;

    return (
        <div className={`${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)}
            {props.groupName && options && options.map(option => {
                return (
                    <p key={generateKey(option.label)}>
                        <label className="radio-label">
                            <input name={props.groupName} type="radio"
                                className={`${withGapStyle}`}
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

export default InputRadioButtons
