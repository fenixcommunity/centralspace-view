import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

function Navbar() {
    return (
        <nav className="nav-wrapper green darken-3">
            <Link to='/' className="brand-logo left">Contralspace App</Link>
            <div className="container">
                {/* NavLink vs Link. For NavLink we have "active" class to show current tab */}
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(withRouter(Navbar)); //wraping router (Higher Order Component - HOC). Another example of wrapper inside -> Dashboard.js