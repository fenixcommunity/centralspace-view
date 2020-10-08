import React from 'react';
import PropTypes from 'prop-types';

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

const FeatureFadeRightInOut = ({ }) => {
    return (
        <div className="feature fade-right-in-out">
            <h3>{props.title}</h3>
            {props.content}
        </div>
    )
}

FeatureFadeRightInOut.propTypes = propTypes;

export default FeatureFadeRightInOut;
