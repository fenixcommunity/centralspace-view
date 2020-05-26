import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

function Navbar(props) {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper green darken-3">
            <Link to='/' className="brand-logo left">Contralspace App</Link>
            <div className="container">
                {/* NavLink vs Link. For NavLink we have "active" class to show current tab */}
                {auth.isLoaded &&
                    links
                }

            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(withRouter(Navbar)); //wraping router (Higher Order Component - HOC). Another example of wrapper inside -> Dashboard.js