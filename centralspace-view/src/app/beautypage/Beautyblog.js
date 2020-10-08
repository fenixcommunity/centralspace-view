import React from "react";
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntroductionAnimation from './components/blog/IntroductionAnimation';
import Blog from './components/blog/Blog';

const propTypes = {}
const styles = theme => ({});
const mapStateToProps = state => ({}); // state from reducers
const mapDispatchToProps = {}; //imported dispatchers
const enhance = compose(
    // withReducer({}), //actual reducer
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const Beautyblog = ({}) => {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <IntroductionAnimation headerMessage="Something Interesting" sentenceMessage="January 31, 2016" />
            <Blog />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

Beautyblog.propTypes = propTypes;

export default enhance(Beautyblog);