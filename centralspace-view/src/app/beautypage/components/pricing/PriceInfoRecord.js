import React from 'react'

function PriceInfoRecord(props) {
    const recordClass = props.disabled ? "disabled" : ""
    const recordIcon = props.disabled ? "icon-close" : "icon-accept"
    return (
        <li className={`pricing-feature ${recordClass}`}>
            <i className={recordIcon} />
            {props.recordMessage}
        </li>
    )
}

export default PriceInfoRecord
