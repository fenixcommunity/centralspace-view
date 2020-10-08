import React from "react";
import PropTypes from 'prop-types';
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

const propTypes = {
    hasAnimation: PropTypes.bool
}

const HighPricingTable = ({ hasAnimation }) => {
    const animationClass = hasAnimation ? 'scale-in-out fade-in-out right-transform-origin' : '';

    const pricingTableContent = (
        <div className={`pricing-table ${animationClass}`}>
            <PriceItem headerIcon="icon-rocket" currency="$" dollars="299" cents="99" />
            <ul className="pricing-features">
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="Enterprise only." />
                <PriceInfoRecord recordMessage="Enterprise only." />
                <PriceInfoRecord recordMessage="Enterprise only." />
            </ul>
        </div>
    )

    return (
        hasAnimation ? (
            <div className="transform-wrapper">
                {pricingTableContent}
            </div>
        ) : (
                <>
                    {pricingTableContent}
                </>
            )
    );
}

HighPricingTable.propTypes = propTypes;

export default HighPricingTable;
