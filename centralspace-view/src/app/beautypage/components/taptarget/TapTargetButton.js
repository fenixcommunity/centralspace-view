import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/tap-target.css';

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

const TapTargetFloatingButton = ({ }) => {
    const activeClass = props.isActive ? "active" : ""
    return (
        <div className={`fixed-action-btn direction-top ${activeClass}`} >
            {props.actionButton}
        </div>
    )
}

TapTargetFloatingButton.propTypes = propTypes;

export default TapTargetFloatingButton
