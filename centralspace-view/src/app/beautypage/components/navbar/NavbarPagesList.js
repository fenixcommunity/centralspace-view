import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    isLogged: PropTypes.bool.isRequired,
    waves: PropTypes.bool
}

const NavbarPagesList = ({ isLogged, waves }) => {
    const wavesEffect = waves ? "waves-effect waves-teal" : ""
    return (
        <>
            {isLogged &&
                <>
                    <li>
                        <NavLink className={wavesEffect} to="/beautyblog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/beautyteam">Team</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/beautyfeatures">Features</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/beautywall">Phone Wall</NavLink>
                    </li>
                </>
            }
            <li>
                <NavLink className={wavesEffect} to="/beautysignup">Sign Up</NavLink>
            </li>
        </>
    )
}

NavbarPagesList.propTypes = propTypes;

export default withRouter(NavbarPagesList);
