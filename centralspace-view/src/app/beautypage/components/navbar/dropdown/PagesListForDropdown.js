import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    waves: PropTypes.bool
}

const PagesListForDropdown = ({ waves }) => {
    const wavesEffect = waves ? "waves-effect waves-teal" : ""
    return (
        <>
            <li>
                <NavLink className={wavesEffect} exact to="/"><i className="material-icons">home</i>Main App</NavLink>
            </li>
            <li>
                <NavLink className={`${wavesEffect}`} exact to="/beautypage"><i className="material-icons">all_inclusive</i>Beautypage</NavLink>
            </li>
            <li>
                <NavLink className={wavesEffect} exact to="/"><i className="material-icons">grain</i>Materialize Css</NavLink>
            </li>
        </>
    )
}

PagesListForDropdown.propTypes = propTypes;

export default withRouter(PagesListForDropdown);
