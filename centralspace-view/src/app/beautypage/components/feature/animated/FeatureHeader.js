import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
}

const FeatureHeader = ({ title, content }) => {
    return (
        <div className="feature">
            <h3>{title}</h3>
            {content}
        </div>
    )
}

FeatureHeader.propTypes = propTypes;

export default FeatureHeader;
