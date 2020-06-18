import React from "react";
import dribbble from '../../../../resources/beautypage/images/clients/dribbble.png';
import google from '../../../../resources/beautypage/images/clients/google.png';
import medium from '../../../../resources/beautypage/images/clients/medium.png';
import messenger from '../../../../resources/beautypage/images/clients/messenger.png';
import pinterest from '../../../../resources/beautypage/images/clients/pinterest.png';
import snapchat from '../../../../resources/beautypage/images/clients/snapchat.png';

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
            src={google}
            alt="google"
          />
          <span className="title">Google</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client yellow">
          <img
            className="logo"
            src={snapchat}
            alt="snapchat"
          />
          <span className="title">Snapchat</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client light-blue lighten-4">
          <img
            className="logo"
            src={messenger}
            alt="messenger"
          />
          <span className="title">Messenger</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client red lighten-4">
          <img
            className="logo"
            src={pinterest}
            alt="pinterest"
          />
          <span className="title">Pinterest</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client pink accent-1">
          <img
            className="logo"
            src={dribbble}
            alt="dribbble"
          />
          <span className="title">Dribbble</span>
        </a>
        <a href="#!" className="col s12 m6 l4 client green accent-3">
          <img
            className="logo"
            src={medium}
            alt="medium"
          />
          <span className="title">Medium</span>
        </a>
      </div>
    </div>
  );
}

export default Clients;
