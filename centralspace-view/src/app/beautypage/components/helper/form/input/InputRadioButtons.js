import React from 'react';
import PropTypes from 'prop-types';
//todo as global css?
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';
import { generateKey } from '../../../../utils/keyGenerator';

const propTypes = {
    groupName: PropTypes.string.isRequired,
    headerText: PropTypes.string,
    isDuplicated: PropTypes.bool,
    withGapStyle: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
            checked: PropTypes.bool,
        })
    ).isRequired
}

const InputRadioButtons = ({ groupName, headerText, isDuplicated, withGapStyle, onChange, options }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const withGapStyle = withGapStyle ? "with-gap" : "";

    return (
        <div className={`${duplicatedClass}`}>
            {headerText && (<p>{headerText}</p>)}
            {groupName && options && options.map(option => {
                return (
                    <p key={generateKey(option.label)}>
                        <label className="radio-label">
                            <input name={groupName} type="radio"
                                className={`${withGapStyle}`}
                                disabled={option.disabled} defaultChecked={option.checked}
                                onChange={onChange} />
                            <span>{option.label}</span>
                        </label>
                    </p>
                )
            })}
        </div>
    )
}

InputRadioButtons.propTypes = propTypes;

export default InputRadioButtons
