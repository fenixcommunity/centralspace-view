import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles"; 
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Features from './components/feature/Features';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import PhoneWall from './components/phonewall/PhoneWall';

const propTypes = {}
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const Beautywall = ({}) => {

    return (
        <div>
            <Navbar
                isDarkMode={true}
                isPrimaryColor={true}
                fullScreenSearchIsActive={true} />
            <PhoneWall />

            <Features />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

Beautywall.propTypes = propTypes;

export default enhance(Beautywall);
