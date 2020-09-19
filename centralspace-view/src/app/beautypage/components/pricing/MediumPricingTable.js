import React from "react";
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

function MediumPricingTable(props) {
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

export default MediumPricingTable;
