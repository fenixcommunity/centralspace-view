import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import ContactUs2 from './components/ContactUs2';
import Footer from './components/Footer';
import StarsParallax from './components/StarsParallax';
import ScrollspySection from './components/ScrollspySection';
import SignupHeader from './components/signup/SignupHeader';
import SignUpForm from './components/signup/SignUpForm';
import SignUpSummary from './components/signup/SignUpSummary';

function Beautysignup() {
    return (
        <div>
            <Navbar isNavbarSolidTransition={true} isDarkMode={false} />
            <SlideOut />
            <SignupHeader />
            
            <SignUpForm />
            <StarsParallax />
            <ContactUs2 />
            <ScrollspySection />
            <SignUpSummary />

            <BeautypageScriptsLoader />
            <Footer />
        </div>
    )
}

export default Beautysignup;