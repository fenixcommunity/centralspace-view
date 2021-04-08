import React from 'react';
import PropTypes from 'prop-types';
import '../../../../resources/beautypage/css/tap-target.css';

const propTypes = {
    modalTheme: PropTypes.string,
    tapTargetRef: PropTypes.object.isRequired,
    content: PropTypes.node.isRequired
}

const TapTargetModal = ({ modalTheme, tapTargetRef, content }) => {
    return (
        <div className="tap-target-wrapper">
            <div className={`tap-target ${modalTheme}`} data-target="menu" ref={tapTargetRef}>
                <div className="tap-target-content white-text" >
                    {content}
                </div>
            </div>
        </div>
    )
}

TapTargetModal.propTypes = propTypes;

export default TapTargetModal;
