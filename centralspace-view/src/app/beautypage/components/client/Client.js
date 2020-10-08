import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    color: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientLogo: PropTypes.node.isRequired
}

const Client = ({ color, clientName, clientLogo }) => {
    return (
        <>
            <a href="#!" className={`col s12 m6 l4 client ${color} `}>
                <img
                    className="logo"
                    src={clientLogo}
                    alt={clientName}
                />
                <span className="title">{clientName}</span>
            </a>
        </>
    )
}

Client.propTypes = propTypes;

export default Client;
