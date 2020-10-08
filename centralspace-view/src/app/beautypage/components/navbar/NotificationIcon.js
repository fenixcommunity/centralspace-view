import React from 'react'

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

const NotificationIcon = ({ }) => {
    return (
        <>
            <li className="notification-icon">
                <button href="" className="btn-floating z-depth-0">
                    <i className="material-icons">{props.notificationIconName}</i>
                </button>
            </li>
            {props.notificationCount &&
                (<li><span className="badge white-text new">{props.notificationCount}</span></li>)
            }
        </>
    )
}

NotificationIcon.propTypes = propTypes;

export default NotificationIcon;
