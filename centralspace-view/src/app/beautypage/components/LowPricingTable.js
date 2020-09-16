import React from "react";

function LowPricingTable(props) {
    const animationClass = props.hasAnimation ? 'scale-in-out fade-in-out left-transform-origin' : '';

    const pricingTableContent = (
        <div className={`pricing-table ${animationClass}`}>
            <div className="pricing-header">
                <i className="icon-paper-plane" />
                <h4>Basic</h4>
                <div className="price">
                    <span className="currency">$</span>
                    <span className="dollars">9</span>
                    <span className="cents">99</span>
                </div>
            </div>
            <ul className="pricing-features">
                <li className="pricing-feature">
                    <i className="icon-accept" />
          10 product uses.
        </li>
                <li className="pricing-feature">
                    <i className="icon-accept" />
          10 product uses.
        </li>
                <li className="pricing-feature">
                    <i className="icon-accept" />
          10 product uses.
        </li>
                <li className="pricing-feature disabled">
                    <i className="icon-close" />
          Pro and above.
        </li>
                <li className="pricing-feature disabled">
                    <i className="icon-close" />
          Enterprise only.
        </li>
                <li className="pricing-feature disabled">
                    <i className="icon-close" />
          Enterprise only.
        </li>
                <li className="pricing-feature disabled">
                    <i className="icon-close" />
          Enterprise only.
        </li>
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
