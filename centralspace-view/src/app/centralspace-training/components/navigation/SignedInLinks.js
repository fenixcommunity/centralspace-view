import React, { useEffect, useRef } from "react";
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css/dist/js/materialize.js';

// props in functional, in component we add this.props
function SignedInLinks(props) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        M.Dropdown.init(dropdownRef.current, {}); // eslint-disable-line
        // const openDropdown = (e) => {
        //     // dropdown.open();
        // };

        // dropdownRef.addEventListener("click", openDropdown);
        // return () => {
        //     // unsubscribe event
        //     dropdownRef.removeEventListener("click", openDropdown);
        // };
    }, []);

    const handleSignOutAction = () => {
        props.signOut();
        props.history.push('/signin');
    }

    return (
        <div>
            <ul id="dropdown" className="dropdown-content">
                <li><a href="#!">one</a></li>
                <li><a href="#!">two</a></li>
                <li className="divider"></li>
                <li><a href="#!">three</a></li>
            </ul>
            <ul className="right">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/create-account">Create Account</NavLink></li>
                <li><NavLink to="/address-list">Address Rest</NavLink></li>
                <li><a onClick={handleSignOutAction} href="#!">Log out</a></li>
                <li><NavLink to="/" className='btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink>
                </li>
                <li><a className="dropdown-trigger" ref={dropdownRef} data-target="dropdown" href="#!"><i className="material-icons">more_vert</i></a></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
// render DOM only when we finish this action (when we refresh we have LogOut Panel and next LogIn Panel)
// rendering faster than firebase action
export default connect(null, mapDispatchToProps)(withRouter(SignedInLinks));