import React from 'react';
import PropTypes from 'prop-types';
//todo as global css?
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';

const propTypes = {
    name: PropTypes.string.required,
    label: PropTypes.string.required,
    headerText: PropTypes.string,
    value: PropTypes.object,
    isDuplicated: PropTypes.bool,
    withFilledInStyle: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

const InputCheckbox = ({ name, label, headerText, value, isDuplicated, withFilledInStyle, checked, disabled, onChange }) => {
    const duplicatedClass = isDuplicated ? "s6" : "s12"
    const withFilledInStyleClass = withFilledInStyle ? "filled-in" : "";

    return (
        <div className={`${duplicatedClass}`}>
            {headerText && (<p>{headerText}</p>)}
            <p>
                <label>
                    <input
                        type="checkbox"
                        name={name}
                        defaultValue={value}
                        className={`${withFilledInStyleClass}`}
                        defaultChecked={checked}
                        disabled={disabled}
                        onChange={onChange}
                    />
                    <span>{label}</span>
                </label>
            </p>
        </div>
    )
}

InputCheckbox.propTypes = propTypes;

export default InputCheckbox
