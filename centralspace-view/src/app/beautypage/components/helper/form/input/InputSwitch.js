import React from 'react'

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

const InputSwitch = ({}) => {
    return (
        <div className="switch">
            <label>
                {props.labelUnchecked}
                <input type="checkbox" defaultChecked={props.checked} disabled={props.disabled} />
                <span className="lever"></span>
                {props.labelChecked}
            </label>
        </div>
    )
}

InputSwitch.propTypes = propTypes;

export default InputSwitch
