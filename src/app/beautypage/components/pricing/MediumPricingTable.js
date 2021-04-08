import React from "react";
import PropTypes from 'prop-types';
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

const propTypes = {
    hasAnimation: PropTypes.bool
}

const MediumPricingTable = ({ hasAnimation }) => {
    const animationClass = hasAnimation ? 'scale-in-out fade-in-out' : '';

    const pricingTableContent = (
        <div className={`pricing-table featured ${animationClass}`}>
            <PriceItem headerIcon="icon-plane" currency="$" dollars="59" cents="99" />
            <ul className="pricing-features">
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="10 product uses." />
                <PriceInfoRecord recordMessage="Pro and above." />
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

MediumPricingTable.propTypes = propTypes;

export default MediumPricingTable;
