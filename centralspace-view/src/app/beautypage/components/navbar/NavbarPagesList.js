import React from 'react';

function NavbarPagesList(props) {
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

export default NavbarPagesList;
