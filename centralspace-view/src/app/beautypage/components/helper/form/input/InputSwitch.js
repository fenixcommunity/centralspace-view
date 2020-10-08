import React from 'react'

const propTypes = {
    labelUnchecked: PropTypes.string.isRequired,
    labelChecked: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
}

const InputSwitch = ({ labelUnchecked, labelChecked, checked, disabled }) => {
    return (
        <div className="switch">
            <label>
                {labelUnchecked}
                <input type="checkbox" defaultChecked={checked} disabled={disabled} />
                <span className="lever"></span>
                {labelChecked}
            </label>
        </div>
    )
}

InputSwitch.propTypes = propTypes;

export default InputSwitch
