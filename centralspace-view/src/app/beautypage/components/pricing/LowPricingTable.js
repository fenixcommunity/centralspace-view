import React from "react";
import PriceInfoRecord from "./PriceInfoRecord";
import PriceItem from "./PriceItem";

function LowPricingTable(props) {
    const animationClass = props.hasAnimation ? 'scale-in-out fade-in-out left-transform-origin' : '';

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

export default LowPricingTable;
