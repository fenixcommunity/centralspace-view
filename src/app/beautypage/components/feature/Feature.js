import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    featureIcon: PropTypes.string.isRequired,
    featureMessage: PropTypes.string.isRequired,
    animationClass: PropTypes.string
}

const Feature = ({ featureIcon, featureMessage, animationClass }) => {
    return (
        <>
            <div className={`col s12 m6 l4 ${animationClass}`}>
                <h4>
                    <i className={featureIcon} />
                </h4>
                <p className="caption">
                    {featureMessage}
                </p>
            </div>
        </>
    )
}

Feature.propTypes = propTypes;

export default Feature;
