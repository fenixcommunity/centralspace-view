import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import '../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import treeFogg from '../../resources/beautypage/images/background.jpg';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Features from './components/feature/Features';
import Clients from './components/client/Clients';
import PricingTables from './components/pricing/PricingTables';
import Blog from './components/blogsection/BlogSection';
// import GoogleMaps from './components/map/GoogleMaps';
import LeafletMapEmbedded from './components/map/LeafletMapEmbedded';
import SignUpForm from './components/signup/SignUpForm';
import Footer from './components/footer/Footer';

const propTypes = {}
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const Beautypage = () => {
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

Beautypage.propTypes = propTypes;

export default enhance(Beautypage);