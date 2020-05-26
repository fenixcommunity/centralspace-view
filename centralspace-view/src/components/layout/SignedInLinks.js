import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

// props in functional, in component we add this.props
function SignedInLinks(props) {
    const signOutAction = () => {
        console.log("signOutAction");
        props.signOut();
        props.history.push('/signin');
        console.log(props);
    }   
    return (
        <ul className="right">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/accounts">Accounts</NavLink></li>
            <li><NavLink to="/create-account">Create Account</NavLink></li>
            <li><NavLink to="/account-list">Accounts Rest</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a onClick={signOutAction}>Log out</a></li>
            <li><NavLink to="/" className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        </ul>

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