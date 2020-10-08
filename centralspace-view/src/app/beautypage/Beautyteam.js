import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import headerImg from '../../resources/beautypage/images/team/office.jpg';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import Header from "./components/header/Header";

const propTypes = {}
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const Beautyteam = ({ }) => {
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <Header
                headerImg={headerImg}
                headerMessage="Team!"
                headerSentence="Founded in 2015, we strive to be the best at what we do. This is made possible by our amazing team located around the world."
                hasBlackTheme={true}
                headerWithOffset={true}
                />
            <Team />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

Beautyteam.propTypes = propTypes;

export default enhance(Beautyteam);