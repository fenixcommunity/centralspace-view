import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    logoutUser: PropTypes.func
}
const LogoutIcon = ({ logoutUser }) => {
    return (
        <li className="logout-icon">
            <button onClick={logoutUser} className="black btn-floating z-depth-0">
                <i className="material-icons">logout</i>
            </button>
        </li>
    )
}

LogoutIcon.propTypes = propTypes;

export default LogoutIcon;
