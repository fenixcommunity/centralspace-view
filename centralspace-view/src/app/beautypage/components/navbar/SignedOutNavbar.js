import PropTypes from 'prop-types';
import React from "react";
import '../../../../resources/gallery/css/full-search.css';
import Logo from "./Logo";
import NavbarPagesList from "./NavbarPagesList";
import NavbarTooltip from "./NavbarTooltip";
import PagesDropdown from "./PagesDropdown";
import Searcher from './searcher/Searcher';
import HamburgerMenu from "./slideout/HamburgerMenu";
import NavbarSlideOut from "./slideout/NavbarSlideOut";
import twitter from 'react-useanimations/lib/twitter'
import UseAnimations from 'react-useanimations';

const propTypes = {
    basicSearchIsActive: PropTypes.bool,
    fullScreenSearchIsActive: PropTypes.bool,
    navbarStyle: PropTypes.string,
    textStyle: PropTypes.string,
    navbarSolidTransitionStyle: PropTypes.string,
}

const SignedOutNavbar = ({
    basicSearchIsActive,
    fullScreenSearchIsActive,
    navbarStyle,
    textStyle,
    navbarSolidTransitionStyle
}) => {
    return (
        <>
            <nav className={`navbar ${navbarStyle} ${navbarSolidTransitionStyle}`}>
                <div className="nav-wrapper">
                    <Logo textStyle={textStyle} />
                    <ul id="mobile-menu" className="right hide-on-med-and-down">
                        <Searcher basicSearchIsActive={basicSearchIsActive} fullScreenSearchIsActive={fullScreenSearchIsActive} />
                        <PagesDropdown isLogged={false} />
                        <NavbarPagesList isLogged={false} />
                        <NavbarTooltip tooltipText="Instagram" tooltipIconName="fab fa-instagram" />
                        <NavbarTooltip tooltipText="Facebook" tooltipIconName="fab fa-facebook" />
                        {/* <NavbarTooltip tooltipText="Twitter" tooltipIconName="fab fa-twitter"/> */}
                        <NavbarTooltip tooltipText="Twitter" animated={(
                            <UseAnimations animation={twitter} strokeColor="#1de9c3" size={32}
                                autoplay={true} loop={true} speed={1}
                                wrapperStyle={{ height: "60px", marginLeft: "-5px" }} />
                        )} />
                    </ul>
                    {/* HamburgerMenu refers to NavbarSlideOut */}
                    <HamburgerMenu textStyle={textStyle} />
                </div>
            </nav>
            <NavbarSlideOut isLogged={false} />
        </>
    );
}

SignedOutNavbar.propTypes = propTypes;

export default SignedOutNavbar;
