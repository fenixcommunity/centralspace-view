import React from "react";
import PropTypes from 'prop-types';
import '../../../resources/beautypage/css/startup-materialize.css';
import '../../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import treeFogg from '../../../resources/beautypage/images/background.jpg';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Features from '../components/feature/Features';
import Clients from '../components/client/Clients';
import PricingTables from '../components/pricing/PricingTables';
import Blog from '../components/blogsection/BlogSection';
// import GoogleMaps from './components/map/GoogleMaps';
import LeafletMapEmbedded from '../components/map/LeafletMapEmbedded';
import SignUpForm from './mix/MixForm';
import Footer from '../components/footer/Footer';

const propTypes = {
    logoutUser: PropTypes.func
}

const Beautypage = ({logoutUser}) => {
    //TODO
    // 1.
    // <Component>
    //     <ChildComponent />
    // </Component>
    // 2. styles and classes pattern
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                basicSearchIsActive={true}
                fullScreenSearchIsActive={false} 
                logoutUser={logoutUser}/>
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

            <Footer />
        </div>
    )
}

Beautypage.propTypes = propTypes;

export default Beautypage;