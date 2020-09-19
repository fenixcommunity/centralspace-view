import React from "react";
import LowPricingTable from "./pricing/LowPricingTable";
import MediumPricingTable from "./pricing/MediumPricingTable";
import HighPricingTable from "./pricing/HighPricingTable";

function PricingTables(props) {

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

export default PricingTables;
