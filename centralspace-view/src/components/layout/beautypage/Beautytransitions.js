import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import Features from './components/Features';
import PricingTables from './components/PricingTables';
import Blog from './components/Blog';
import Feature1 from './components/transitions/Feature1';
import Feature2 from './components/transitions/Feature2';
import Feature3 from './components/transitions/Feature3';
import Feature4 from './components/transitions/Feature4';
import Feature5 from './components/transitions/Feature5';
import Feature6 from './components/transitions/Feature6';
import TransitionsHeader from './components/transitions/TransitionsHeader';

function Beautytransitions() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                fullScreenSearchIsActive={true} />
            <SlideOut />
            <TransitionsHeader />

            <Features isExtended={true} hasAnimation={true} />
            <Blog isExtended={true} hasAnimation={true} />
            <PricingTables isExtended={true} hasAnimation={true} />
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
            <Feature6 />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautytransitions;