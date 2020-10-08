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

const PriceItem = ({ }) => {
    return (
        <div className="pricing-header">
            <i className={props.headerIcon} />
            <h4>{props.priceTypeName}</h4>
            <div className="price">
    <span className="currency">{props.currency}</span>
                <span className="dollars">{props.dollars}</span>
                <span className="cents">{props.cents}</span>
            </div>
        </div>
    )
}

PriceItem.propTypes = propTypes;

export default PriceItem;
