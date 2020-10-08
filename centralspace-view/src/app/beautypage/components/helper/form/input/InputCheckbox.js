import React from 'react'
//todo as global css?
import '../../../../../../resources/beautypage/css/radiobutton-checkbox.css';

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

const InputCheckbox = ({}) => {
    const duplicatedClass = props.isDuplicated ? "s6" : "s12"
    const withFilledInStyle = props.withFilledInStyle ? "filled-in" : "";

    return (
        <div className={`${duplicatedClass}`}>
            {props.headerText && (<p>{props.headerText}</p>)}
            <p>
                <label>
                    <input
                        type="checkbox"
                        name={props.name}
                        defaultValue={props.value}
                        className={`${withFilledInStyle}`}
                        defaultChecked={props.checked}
                        disabled={props.disabled}
                        onChange={props.onChange}
                    />
                    <span>{props.label}</span>
                </label>
            </p>
        </div>
    )
}

InputCheckbox.propTypes = propTypes;

export default InputCheckbox
