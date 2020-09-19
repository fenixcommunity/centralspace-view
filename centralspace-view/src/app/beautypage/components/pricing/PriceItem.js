import React from 'react'

function PriceItem(props) {
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

export default PriceItem;
