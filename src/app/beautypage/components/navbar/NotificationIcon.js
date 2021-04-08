import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    notificationIconName: PropTypes.string.isRequired,
    notificationCount: PropTypes.number.isRequired
}

const NotificationIcon = ({ notificationIconName, notificationCount }) => {
    return (
        <>
            <li className="notification-icon">
                <button href="" className="btn-floating z-depth-0">
                    <i className="material-icons">{notificationIconName}</i>
                </button>
            </li>
            {notificationCount &&
                (<li><span className="badge white-text new">{notificationCount}</span></li>)
            }
        </>
    )
}

NotificationIcon.propTypes = propTypes;

export default NotificationIcon;
