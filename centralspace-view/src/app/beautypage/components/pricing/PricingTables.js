import React from "react";
import LowPricingTable from "./LowPricingTable";
import MediumPricingTable from "./MediumPricingTable";
import HighPricingTable from "./HighPricingTable";

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

const PricingTables = ({}) => {

  const pricingTablesBody = (
    <div className="row">
      <h1 className="center">Pricing</h1>
      <div className="col s12 m4">
        <LowPricingTable hasAnimation={props.hasAnimation} />
      </div>
      <div className="col s12 m4">
        <MediumPricingTable hasAnimation={props.hasAnimation} />
      </div>
      <div className="col s12 m4">
        <HighPricingTable hasAnimation={props.hasAnimation} />
      </div>
    </div>
  )

  const pricingTablesWrapper = props.isExtended ? (
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
