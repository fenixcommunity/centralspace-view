import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Features from './components/feature/Features';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PhoneWall from './components/phonewall/PhoneWall';

function Beautywall() {

    return (
        <div>
            <Navbar
                isDarkMode={true}
                isPrimaryColor={true}
                fullScreenSearchIsActive={true} />
            <PhoneWall />

            <Features />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautywall;