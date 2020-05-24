import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

// props in functional, in component we add this.props
function SignedInLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/accounts">Accounts</NavLink></li>
            <li><NavLink to="/create-account">Create Account</NavLink></li>
            <li><NavLink to="/account-list">Accounts Rest</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a onClick={props.signOut}>Log out</a></li>
            <li><NavLink to="/" className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);