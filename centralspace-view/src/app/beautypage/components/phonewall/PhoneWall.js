import React from "react";
import PhoneWallHeader from "./PhoneWallHeader";
import PhoneWallImages from "./PhoneWallImages";

const propTypes = {}

const PhoneWall = () => {
  return (
    <div className="phone-wall-intro header white full-height">
      <div className="header-background" />
      <div className="header-wrapper row">
        <PhoneWallHeader title="Phone Wall!" sentence="Show off your business in a whole new way." />
        <PhoneWallImages />
      </div>
    </div>
  );
}

PhoneWall.propTypes = propTypes;

export default PhoneWall;
