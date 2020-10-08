import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
}

const FeatureFadeRightInOut = ({ title, content }) => {
    return (
        <div className="feature fade-right-in-out">
            <h3>{title}</h3>
            {content}
        </div>
    )
}

FeatureFadeRightInOut.propTypes = propTypes;

export default FeatureFadeRightInOut;
