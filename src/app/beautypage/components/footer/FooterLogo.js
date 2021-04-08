import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    logoDescription: PropTypes.string.isRequired,
    logoImg: PropTypes.node.isRequired
}

const FooterLogo = ({ logoDescription, logoImg }) => {
    return (
        <div className="col s6 m3">
            <img
                className="materialize-logo"
                src={logoImg}
                alt="description"
            />
            <p>{logoDescription}</p>
        </div>
    )
}

FooterLogo.propTypes = propTypes;

export default FooterLogo;
