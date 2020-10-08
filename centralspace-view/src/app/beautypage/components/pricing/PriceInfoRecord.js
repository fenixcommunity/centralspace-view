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

const PriceInfoRecord = ({ }) => {
    const recordClass = props.disabled ? "disabled" : ""
    const recordIcon = props.disabled ? "icon-close" : "icon-accept"
    return (
        <li className={`pricing-feature ${recordClass}`}>
            <i className={recordIcon} />
            {props.recordMessage}
        </li>
    )
}

PriceInfoRecord.propTypes = propTypes;

export default PriceInfoRecord
