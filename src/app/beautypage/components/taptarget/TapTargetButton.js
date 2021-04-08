import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/tap-target.css';

const propTypes = {
    isActive: PropTypes.bool,
    actionButton: PropTypes.node.isRequired
}

const TapTargetFloatingButton = ({ isActive, actionButton }) => {
    const activeClass = isActive ? "active" : ""
    return (
        <div className={`fixed-action-btn direction-top ${activeClass}`} >
            {actionButton}
        </div>
    )
}

TapTargetFloatingButton.propTypes = propTypes;

export default TapTargetFloatingButton
