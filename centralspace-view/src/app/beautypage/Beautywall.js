import React from "react";
import Features from './components/feature/Features';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PhoneWall from './components/phonewall/PhoneWall';

const propTypes = {}

const Beautywall = () => {
    return (
        <div>
            <Navbar
                isDarkMode={true}
                isPrimaryColor={true}
                fullScreenSearchIsActive={true} />
            <PhoneWall />
        
            <Features />
            
            <Footer />
        </div>
    )
}

Beautywall.propTypes = propTypes;

export default Beautywall;
