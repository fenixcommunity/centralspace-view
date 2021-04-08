import React from "react";
import PropTypes from 'prop-types';
import backgroundStars from '../../../resources/beautypage/images/backgroundStars.jpg';
import Navbar from './navbar/Navbar';
import ContactUs from './contact/ContactUs';
import Footer from './footer/Footer';
import StarsParallax from './parallax/StarsParallax';
import TabsSection from './other/TabsSection';
import Header from "./header/Header";
import SignUpForm from './mix/MixForm';
import SignUpSummary from './mix/MixSummary';
// import MaterialUiStepper from '../components/other/MaterialUiStepper';
import Gallery from './gallery/Gallery';

const propTypes = {
    logoutUser: PropTypes.func
}
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
                    fullScreenSearchIsActive={true}
                    logoutUser={this.props.logoutUser} />
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
