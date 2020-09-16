import React from "react";

function MediumPricingTable(props) {
    const animationClass = props.hasAnimation ? 'scale-in-out fade-in-out' : '';

    const pricingTableContent = (
        <div className={`pricing-table featured ${animationClass}`}>
            <div className="pricing-header">
                <i className="icon-plane" />
                <h4>Pro</h4>
                <div className="price">
                    <span className="currency">$</span>
                    <span className="dollars">59</span>
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
                <li className="pricing-feature">
                    <i className="icon-accept" />
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

export default MediumPricingTable;
