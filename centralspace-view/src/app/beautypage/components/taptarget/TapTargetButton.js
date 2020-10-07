import React from 'react';
import '../../../../resources/beautypage/css/tap-target.css';

function TapTargetFloatingButton(props) {
    const activeClass = props.isActive ? "active" : ""
    return (
        <div className={`fixed-action-btn direction-top ${activeClass}`} >
            {props.actionButton}
        </div>
    )
}

export default TapTargetFloatingButton
