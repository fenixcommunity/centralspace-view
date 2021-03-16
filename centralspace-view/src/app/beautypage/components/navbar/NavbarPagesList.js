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
            {isLogged ?
                (<>
                    <li>
                        <NavLink className={wavesEffect} to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/team">Team</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/features">Features</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/wall">Phone Wall</NavLink>
                    </li>
                    <li>
                        <NavLink className={wavesEffect} to="/other">Other</NavLink>
                    </li>
                </>
                )
                :
                (
                    <>
                        <li>
                            <NavLink className={wavesEffect} to="/signin">Sign In</NavLink>
                        </li>
                        <li>
                            <NavLink className={wavesEffect} to="/signup">Sign Up</NavLink>
                        </li>
                    </>
                )
            }

        </>
    )
}

NavbarPagesList.propTypes = propTypes;

export default withRouter(NavbarPagesList);
