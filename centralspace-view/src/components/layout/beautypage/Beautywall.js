import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SlideOut from './components/SlideOut';
import PhoneWall from './components/phonewall/PhoneWall';

function Beautywall() {

    return (
        <div>
            <Navbar
                isDarkMode={true}
                isPrimaryColor={true}
                fullScreenSearchIsActive={true} />
            <SlideOut />
            <PhoneWall />

            <Features />

            <BeautypageScriptsLoader />
            <Footer />
        </div>
    )
}

export default Beautywall;