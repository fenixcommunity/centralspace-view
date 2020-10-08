import React from "react";
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

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

const HighPricingTable = ({ }) => {
    const animationClass = props.hasAnimation ? 'scale-in-out fade-in-out right-transform-origin' : '';

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
        props.hasAnimation ? (
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
