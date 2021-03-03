import React from "react";
import backgroundStars from '../../resources/beautypage/images/backgroundStars.jpg';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/contact/ContactUs';
import Footer from './components/footer/Footer';
import StarsParallax from './components/parallax/StarsParallax';
import TabsSection from './components/other/TabsSection';
import Header from "./components/header/Header";
import SignUpForm from './components/signup/SignUpForm';
import SignUpSummary from './components/signup/SignUpSummary';
// import MaterialUiStepper from './components/other/MaterialUiStepper';
import Gallery from './components/gallery/Gallery';

const propTypes = {}
class Beautysignup extends React.Component {

    // old solution, only example
    constructor(props) {
        super(props)
        this.state = this.initialState = {}
    }

    componentDidMount() { }

    render() {
        return (
            <div>
                <Navbar
                    isNavbarSolidTransition={true}
                    isDarkMode={false}
                    fullScreenSearchIsActive={true} />
                <Header
                    headerImg={backgroundStars}
                    headerMessage="Sign Up"
                    headerSentence="Join with us and discover the unknown!" />

                <SignUpForm />
                <StarsParallax />
                <ContactUs />
                <TabsSection />
                <SignUpSummary />
                <Gallery />
                {/*
            TODO - create similar components
             <MaterialUiStepper /> 
             */}
                <Footer />
            </div>
        )
    }
}

Beautysignup.propTypes = propTypes;

export default Beautysignup;
