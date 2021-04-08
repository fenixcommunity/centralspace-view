import React from "react";
import PropTypes from 'prop-types';
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

const propTypes = {
    hasAnimation: PropTypes.bool
}

const LowPricingTable = ({ hasAnimation }) => {
    const animationClass = hasAnimation ? 'scale-in-out fade-in-out left-transform-origin' : '';

    const pricingTableContent = (
        <div className={`pricing-table ${animationClass}`}>
            <PriceItem headerIcon="icon-paper-plane" currency="$" dollars="9" cents="99" />
            <ul className="pricing-features">
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="Pro and above." disabled={true} />
                <PriceInfoRecord recordMessage="Enterprise only." disabled={true} />
                <PriceInfoRecord recordMessage="Enterprise only." disabled={true} />
                <PriceInfoRecord recordMessage="Enterprise only." disabled={true} />
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

LowPricingTable.propTypes = propTypes;

export default LowPricingTable;
