import React from "react";
import PropTypes from 'prop-types';
import Features from '../components/feature/Features';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PhoneWall from '../components/phonewall/PhoneWall';

const propTypes = {
    logoutUser: PropTypes.func
}

const Beautywall = ({logoutUser}) => {
    return (
        <div>
            <Navbar
                isDarkMode={true}
                isPrimaryColor={true}
                fullScreenSearchIsActive={true}
                logoutUser={logoutUser} />
            <PhoneWall />
        
            <Features />
            
            <Footer />
        </div>
    )
}

Beautywall.propTypes = propTypes;

export default Beautywall;
