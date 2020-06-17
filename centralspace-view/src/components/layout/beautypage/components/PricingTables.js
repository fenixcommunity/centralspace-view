import React from "react";

function PricingTables() {
  return (
    <div className="section valign-wrapper">
      <div className="container">
        <div className="row">
          <h1 className="center">Pricing</h1>
          <div className="col s12 m4">
            <div className="pricing-table">
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
          </div>
          <div className="col s12 m4">
            <div className="pricing-table featured">
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
          </div>
          <div className="col s12 m4">
            <div className="pricing-table">
              <div className="pricing-header">
                <i className="icon-rocket" />
                <h4>Enterprise</h4>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="dollars">299</span>
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
                    10 product uses.
                  </li>
                <li className="pricing-feature">
                  <i className="icon-accept" />
                    Enterprise only.
                  </li>
                <li className="pricing-feature">
                  <i className="icon-accept" />
                    Enterprise only.
                  </li>
                <li className="pricing-feature">
                  <i className="icon-accept" />
                    Enterprise only.
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTables;
