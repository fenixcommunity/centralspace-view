import React from 'react'
import NavbarPagesList from '../NavbarPagesList'

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const NavbarSlideOutFooter = ({ }) => {
    return (
        <NavbarPagesList waves={true} />
    )
}

NavbarSlideOutFooter.propTypes = propTypes;

export default NavbarSlideOutFooter
