import React from "react";
import PropTypes from 'prop-types';
import headerImg from '../../../resources/beautypage/images/team/office.jpg';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Team from '../components/team/Team';
import Header from "../components/header/Header";

const propTypes = {
    logoutUser: PropTypes.func
}

const Beautyteam = ({logoutUser}) => {
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={true}
                fullScreenSearchIsActive={true}
                logoutUser={logoutUser} />
            <Header
                headerImg={headerImg}
                headerMessage="Team!"
                headerSentence="Founded in 2015, we strive to be the best at what we do. This is made possible by our amazing team located around the world."
                hasBlackTheme={true}
                headerWithOffset={true}
                />
            <Team />

            <Footer />
        </div>
    )
}

Beautyteam.propTypes = propTypes;

export default Beautyteam;