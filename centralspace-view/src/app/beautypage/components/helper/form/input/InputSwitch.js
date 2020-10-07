import React from 'react'

function InputSwitch(props) {
    return (
        <div className="switch">
            <label>
                {props.labelUnchecked}
                <input type="checkbox" checked={props.checked} disabled={props.disabled} />
                <span className="lever"></span>
                {props.labelChecked}
            </label>
        </div>
    )
}

export default InputSwitch
