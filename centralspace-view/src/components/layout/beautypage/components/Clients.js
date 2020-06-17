import React from "react";

function Clients() {
  return (
    <div className="section black clients">
      <div className="container">
        <h2 className="section-title">Clients</h2>
      </div>
      <div className="row">
        <a href="#!" className="col s12 m6 l4 client white">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="google"
          />
          <span className="title">Google</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client yellow">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="snapchat"
          />
          <span className="title">Snapchat</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client light-blue lighten-4">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="messenger"
          />
          <span className="title">Messenger</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client red lighten-4">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="pinterest"
          />
          <span className="title">Pinterest</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client pink accent-1">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="dribbble"
          />
          <span className="title">Dribbble</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client green accent-3">
          <img
            className="logo"
            src="http://placehold.it/128x128"
            alt="medium"
          />
          <span className="title">Medium</span>
        </a>
      </div>
    </div>
  );
}

export default Clients;
