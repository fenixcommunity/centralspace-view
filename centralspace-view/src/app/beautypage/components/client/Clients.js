import React from "react";
import dribbble from '../../../../resources/beautypage/images/clients/dribbble.png';
import google from '../../../../resources/beautypage/images/clients/google.png';
import medium from '../../../../resources/beautypage/images/clients/medium.png';
import messenger from '../../../../resources/beautypage/images/clients/messenger.png';
import pinterest from '../../../../resources/beautypage/images/clients/pinterest.png';
import snapchat from '../../../../resources/beautypage/images/clients/snapchat.png';
import Client from "./Client";

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

const Clients = ({ }) => {
  return (
    <div className="section black clients">
      <div className="container">
        <h2 className="section-title">Clients</h2>
      </div>
      <div className="row">
        <Client clientName="Google" clientLogo={google} color="white" />
        <Client clientName="Snapchat" clientLogo={snapchat} color="yellow" />
        <Client clientName="Messenger" clientLogo={messenger} color="light-blue lighten-4" />
        <Client clientName="Pinterest" clientLogo={pinterest} color="red lighten-4" />
        <Client clientName="Dribbble" clientLogo={dribbble} color="pink accent-1" />
        <Client clientName="Medium" clientLogo={medium} color="green accent-3" />
      </div>
    </div>
  );
}

Clients.propTypes = propTypes;

export default Clients;
