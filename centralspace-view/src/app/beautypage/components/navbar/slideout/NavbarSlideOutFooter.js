import React from 'react';
import PropTypes from 'prop-types';
import NavbarPagesList from '../NavbarPagesList'

const propTypes = {
    isLogged: PropTypes.bool.isRequired
}

const NavbarSlideOutFooter = ({ isLogged }) => {
    return (
        <NavbarPagesList isLogged={isLogged} waves={true} />
    )
}

NavbarSlideOutFooter.propTypes = propTypes;

export default NavbarSlideOutFooter
