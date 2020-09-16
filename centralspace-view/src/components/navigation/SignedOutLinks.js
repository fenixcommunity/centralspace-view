import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/signup">Sign up</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/materializecss">Materialize</NavLink></li>
            <li><NavLink to="/beautypage">Beauty Page</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;