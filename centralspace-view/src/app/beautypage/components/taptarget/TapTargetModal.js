import React from 'react';
import '../../../../resources/beautypage/css/tap-target.css';

function TapTargetModal(props) {
    return (
        <div className="tap-target-wrapper">
        <div className={`tap-target ${props.modalTheme}`} data-target="menu" ref={props.tapTargetRef}>
            <div className="tap-target-content white-text" >
                {props.content}
            </div>
        </div>
    </div>
    )
}

export default TapTargetModal;
