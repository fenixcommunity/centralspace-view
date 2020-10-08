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

const TapTargetModal = ({}) => {
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

TapTargetModal.propTypes = propTypes;

export default TapTargetModal;
