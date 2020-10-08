import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import backgroundStars from '../../resources/beautypage/images/backgroundStars.jpg';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
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
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);
class Beautysignup extends React.Component {
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

                <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
                <Footer />
            </div>
        )
    }
}

Beautysignup.propTypes = propTypes;

export default enhance(Beautysignup);
