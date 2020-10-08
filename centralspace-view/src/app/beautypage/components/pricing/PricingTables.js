import React from "react";
import PropTypes from 'prop-types';
import LowPricingTable from "./LowPricingTable";
import MediumPricingTable from "./MediumPricingTable";
import HighPricingTable from "./HighPricingTable";

const propTypes = {
  hasAnimation: PropTypes.bool,
  isExtended: PropTypes.bool,
}

const PricingTables = ({ hasAnimation, isExtended }) => {

  const pricingTablesBody = (
    <div className="row">
      <h1 className="center">Pricing</h1>
      <div className="col s12 m4">
        <LowPricingTable hasAnimation={hasAnimation} />
      </div>
      <div className="col s12 m4">
        <MediumPricingTable hasAnimation={hasAnimation} />
      </div>
      <div className="col s12 m4">
        <HighPricingTable hasAnimation={hasAnimation} />
      </div>
    </div>
  )

  const pricingTablesWrapper = isExtended ? (
    <div className="row valign">
      <div className="col s12 m10 offset-m1">
        {pricingTablesBody}
      </div>
    </div>
  ) :
    (
      <div className="container">
        {pricingTablesBody}
      </div>
    );

  return (
    <div className="section valign-wrapper">
      {pricingTablesWrapper}
    </div>
  );
}

PricingTables.propTypes = propTypes;

export default PricingTables;
