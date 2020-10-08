import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    recordMessage: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

const PriceInfoRecord = ({ recordMessage, disabled }) => {
    const recordClass = disabled ? "disabled" : ""
    const recordIcon = disabled ? "icon-close" : "icon-accept"
    return (
        <li className={`pricing-feature ${recordClass}`}>
            <i className={recordIcon} />
            {recordMessage}
        </li>
    )
}

PriceInfoRecord.propTypes = propTypes;

export default PriceInfoRecord
