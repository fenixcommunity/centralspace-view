import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
// import '../../../resources/beautypage/css/materializenew.css'; //remove after test
import '../../../resources/beautypage/css/search.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Header from './components/Header';
import Features from './components/Features';
import Clients from './components/Clients';
import PricingTables from './components/PricingTables';
import Blog from './components/Blog';
import GoogleMaps from './components/GoogleMaps';
import LeafletMapEmbedded from './components/LeafletMapEmbedded';
import SignUpForm from './components/signup/SignUpForm';
import Footer from './components/Footer';

function Beautypage() {
    // about.html docs/abouts.html AND docs/element-transitions.html AND materializecss docs
    // we have light,black,white section themes

    // todo add picture to navbar mobile


    //  rożnica w placeholder, usun zbedne skrytpty
    //  fonty popraw
    // wywal init i stworz nowy plik search i dawaj go wszedzie albo przenies do init
    // popraw placeholder scroll i odleglosc zdjecia
    // popraw placeholder dropdown
    // section popraw
// modal sign up popraw
// podziel na mniejsze

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                basicSearchIsActive={true} 
                fullScreenSearchIsActive={false}/>
            <SlideOut />
            <Header />

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