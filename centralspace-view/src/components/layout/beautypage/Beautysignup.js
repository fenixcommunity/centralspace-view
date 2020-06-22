import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Header from './components/Header';
import StarsParallax from './components/StarsParallax';
import SignUpForm from './components/SignUpForm';
import ContactUs2 from './components/ContactUs2';
import Footer from './components/Footer';

function Beautysignup() {

    return (
        <div>
            <Navbar isNavbarSolidTransition={true} isDarkMode={false} />
            <SlideOut />
            <Header />
            
            <SignUpForm />
            <StarsParallax />
            <ContactUs2 />

            <BeautypageScriptsLoader />
            <Footer />
        </div>
    )
}

export default Beautysignup;