import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    possition: PropTypes.string
}

const Icon = ({ icon, iconColor, possition }) => {
    return (
        <i className={`material-icons  ${iconColor ? iconColor : ""} ${possition ? possition : "prefix"}`}>
            {icon}
        </i>
    )
}

Icon.propTypes = propTypes;

export default Icon;
