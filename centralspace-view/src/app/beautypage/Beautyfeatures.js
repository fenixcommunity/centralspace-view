import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Features from './components/feature/Features';
import PricingTables from './components/pricing/PricingTables';
import BlogSection from './components/blogsection/BlogSection';
import Feature1 from './components/feature/animated/Feature1';
import Feature2 from './components/feature/animated/Feature2';
import Feature3 from './components/feature/animated/Feature3';
import Feature4 from './components/feature/animated/Feature4';
import SliderHeader from './components/helper/header/SliderHeader';

function Beautyfeatures() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                fullScreenSearchIsActive={true} />

            <SliderHeader />

            <Features isExtended={true} hasAnimation={true} />
            <BlogSection isExtended={true} hasAnimation={true} />
            <PricingTables isExtended={true} hasAnimation={true} />

            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautyfeatures;