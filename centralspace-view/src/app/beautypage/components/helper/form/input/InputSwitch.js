import React from 'react'

function InputSwitch(props) {
    return (
        <div className="switch">
            <label>
                {props.labelNegative}
                <input type="checkbox" disabled={props.disabled} />
                <span className="lever"></span>
                {props.labelPositive}
            </label>
        </div>
    )
}

export default InputSwitch
