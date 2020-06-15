import React from "react";

class Animation extends React.Component {
  render() {
    return (
      <div className="title-transition section white valign-wrapper">
        <div className="row valign">
          <div className="col s8 offset-s2 m6 offset-m3 blog-title fade-transition">
            <h1>Something Interesting</h1>
            <span className="date">January 31, 2016</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Animation;
