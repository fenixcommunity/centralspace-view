import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    headerIcon: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    dollars: PropTypes.string.isRequired,
    cents: PropTypes.string.isRequired
}

const PriceItem = ({ headerIcon, currency, dollars, cents }) => {
    return (
        <div className="pricing-header">
            <i className={headerIcon} />
            <div className="price">
                <span className="currency">{currency}</span>
                <span className="dollars">{dollars}</span>
                <span className="cents">{cents}</span>
            </div>
        </div>
    )
}

PriceItem.propTypes = propTypes;

export default PriceItem;
