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

const MediumPricingTable = ({}) => {
    const animationClass = props.hasAnimation ? 'scale-in-out fade-in-out' : '';

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

MediumPricingTable.propTypes = propTypes;

export default MediumPricingTable;
