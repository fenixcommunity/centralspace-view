import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    waves: PropTypes.bool
}

const PagesListForDropdown = ({ waves }) => {
    const wavesEffect = waves ? "waves-effect waves-teal" : ""
    return (
        <>
            <li>
                <a className={wavesEffect} href="/"><i className="material-icons">home</i>Main App</a>
            </li>
            <li>
                <a className={`active ${wavesEffect}`} href="/beautypage"><i className="material-icons">all_inclusive</i>Beautypage</a>
            </li>
            <li>
                <a className={wavesEffect} href="/beautypage"><i className="material-icons">grain</i>Materialize Css</a>
            </li>
        </>
    )
}

PagesListForDropdown.propTypes = propTypes;

export default PagesListForDropdown;
