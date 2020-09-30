import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import '../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import treeFogg from '../../resources/beautypage/images/background.jpg';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Header from './components/helper/header/Header';
import Features from './components/feature/Features';
import Clients from './components/clients/Clients';
import PricingTables from './components/pricing/PricingTables';
import Blog from './components/blogsection/BlogSection';
import GoogleMaps from './components/map/GoogleMaps';
import LeafletMapEmbedded from './components/map/LeafletMapEmbedded';
import SignUpForm from './components/signup/SignUpForm';
import Footer from './components/footer/Footer';

function Beautypage() {



//      podziel na mniejsze
//    wywal materialize css??? lub refactoring. Warto?
// centralspace training
// wywal errory i warning
// dodaj required props https://stackoverflow.com/questions/45288511/set-required-props-on-component


    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                basicSearchIsActive={true}
                fullScreenSearchIsActive={false} />
            <Header
                headerImg={treeFogg}
                headerMessage="Beauty Page"
                headerSentence="Take some motion in your life!" />
            <Features isExtended={false} hasAnimation={false} />
            <Clients />
            <PricingTables isExtended={false} hasAnimation={false} />
            <Blog isExtended={false} hasAnimation={false} />
            {/* <GoogleMaps /> */}
            <LeafletMapEmbedded />
            <SignUpForm />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautypage;