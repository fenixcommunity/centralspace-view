import React from 'react'

function NotificationIcon(props) {
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

export default NotificationIcon;
