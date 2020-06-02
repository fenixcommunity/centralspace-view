import React from "react";
import { Link, withRouter } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


function Navbar(props) {

  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <>
      <nav>
        <div className="nav-wrapper green darken-3">
            <Link to='/' className="brand-logo left">Contralspace App</Link>
            <ul className="right hide-on-med-and-down">
              {/* NavLink vs Link. For NavLink we have "active" class to show current tab */}
              {auth.isLoaded &&
                links
              }
            </ul>
        </div>
      </nav>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(withRouter(Navbar)); //wraping router (Higher Order Component - HOC). Another example of wrapper inside -> Dashboard.js