import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import TeamHeader from './components/team/TeamHeader';
import Team from './components/team/Team';

function Beautyteam() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <SlideOut />
            <TeamHeader />

            <Team />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautyteam;