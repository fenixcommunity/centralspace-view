import React from "react";
import PropTypes from 'prop-types';
import '../../../../resources/gallery/css/full-search.css';
import Searcher from './searcher/Searcher';
import Logo from "./Logo";
import PagesDropdown from "./PagesDropdown";
import NavbarTooltip from "./NavbarTooltip";
import NotificationIcon from "./NotificationIcon";
import NavbarPagesList from "./NavbarPagesList";
import HamburgerMenu from "./slideout/HamburgerMenu";
import NavbarSlideOut from "./slideout/NavbarSlideOut";
import LogoutIcon from "./LogoutIcon";

const propTypes = {
    basicSearchIsActive: PropTypes.bool,
    fullScreenSearchIsActive: PropTypes.bool,
    logoutUser: PropTypes.func,
    navbarStyle: PropTypes.string,
    textStyle: PropTypes.string,
    navbarSolidTransitionStyle: PropTypes.string,

}

const SignedInNavbar = ({
    basicSearchIsActive,
    fullScreenSearchIsActive,
    logoutUser,
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
                        <PagesDropdown isLogged={true} />
                        <NavbarPagesList isLogged={true} />
                        <NavbarTooltip tooltipText="Instagram" tooltipIconName="fab fa-instagram" />
                        <NavbarTooltip tooltipText="Facebook" tooltipIconName="fab fa-facebook" />
                        <NavbarTooltip tooltipText="Twitter" tooltipIconName="fab fa-twitter" />
                        <NotificationIcon notificationIconName="notifications" notificationCount={5} />
                        {logoutUser && <LogoutIcon logoutUser={logoutUser} />}
                    </ul>
                    {/* HamburgerMenu refers to NavbarSlideOut */}
                    <HamburgerMenu textStyle={textStyle} />
                </div>
            </nav>
            <NavbarSlideOut isLogged={true} />
        </>
    );
}

SignedInNavbar.propTypes = propTypes;

export default SignedInNavbar;
