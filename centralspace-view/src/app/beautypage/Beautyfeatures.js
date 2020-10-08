import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Features from './components/feature/Features';
import PricingTables from './components/pricing/PricingTables';
import BlogSection from './components/blogsection/BlogSection';
import Feature1 from './components/feature/animated/Feature1';
import Feature2 from './components/feature/animated/Feature2';
import Feature3 from './components/feature/animated/Feature3';
import Feature4 from './components/feature/animated/Feature4';
import SliderHeader from './components/header/SliderHeader';

const propTypes = {

}
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const Beautyfeatures = ({}) => {

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

Beautyfeatures.propTypes = propTypes;

export default enhance(Beautyfeatures);