import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a className="brand-logo left">Contralspace App</a>
                <ul className="right">
                    {/* NavLink vs Link. For NavLink we have "active" class to show current tab */}
                    <li><NavLink to="/">About</NavLink></li>
                    <li><NavLink to="/accounts">Accounts</NavLink></li>
                    <li><NavLink to="/account-rest">Accounts Rest</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); //wraping router (Higher Order Component - HOC). Another example of wrapper inside -> About.js