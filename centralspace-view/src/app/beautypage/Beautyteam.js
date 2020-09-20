import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import headerImg from '../../resources/beautypage/images/team/office.jpg';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import Header from "./components/helpers/header/Header";

function Beautyteam() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <Header
                headerImg={headerImg}
                headerMessage="Team!"
                headerSentence="Founded in 2015, we strive to be the best at what we do. This is made possible by our amazing team located around the world."
                hasBlackTheme={true}
                headerWithOffset={true}
                />
            <Team />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautyteam;