import React from 'react';
import PropTypes from 'prop-types';

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

const NavbarPagesList = ({ }) => {
    const wavesEffect = props.waves ? "waves-effect waves-teal" : ""
    return (
        <>
            <li>
                <a className={wavesEffect} href="/beautyblog">Blog</a>
            </li>
            <li>
                <a className={wavesEffect} href="/beautyteam">Team</a>
            </li>
            <li>
                <a className={wavesEffect} href="/beautyfeatures">Features</a>
            </li>
            <li>
                <a className={wavesEffect} href="/beautywall">Phone Wall</a>
            </li>
            <li>
                <a className={wavesEffect} href="/beautysignup">Sign Up</a>
            </li>
        </>
    )
}

NavbarPagesList.propTypes = propTypes;

export default NavbarPagesList;
