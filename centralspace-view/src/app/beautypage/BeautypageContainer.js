import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import '../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import { setExternalScriptsLoaded } from "./actions/beautypageActions";
import { loadExternalScripts } from "./loader/scriptLoader"
import Beautypage from "./Beautypage";
import Beautywall from "./Beautywall";
import Beautyblog from "./Beautyblog";
import Beautyteam from "./Beautyteam";
import Beautysignup from "./Beautysignup";
import Beautyfeatures from "./Beautyfeatures";
import ErrorPage from "./components/error/ErrorPage";
import BeautysigninContainer from "./BeautysigninContainer";

const propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    externalScriptsLoaded: PropTypes.bool.isRequired,
    setExternalScriptsLoaded: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    externalScriptsLoaded: state.beautypage.externalScriptsLoaded

}); // state from reducers

const mapDispatchToProps = {
    setExternalScriptsLoaded
}; //imported dispatchers

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const BeautypageContainer = ({ history, location, externalScriptsLoaded, setExternalScriptsLoaded }) => {
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    let beautypageContext;
    switch (location.pathname) {
        case "/beautypage":
            beautypageContext = <Beautypage />
            break
        case "/beautyblog":
            beautypageContext = <Beautyblog />
            break
        case "/beautyteam":
            beautypageContext = <Beautyteam />
            break
        case "/beautyfeatures":
            beautypageContext = <Beautyfeatures />
            break
        case "/beautywall":
            beautypageContext = <Beautywall />
            break
        case "/beautysignup":
            beautypageContext = <Beautysignup />
            break
        case "/beautysignin":
            beautypageContext = <BeautysigninContainer history={history} />
            break
        default:
            beautypageContext = <ErrorPage />
    }

    return (
        <>
            {beautypageContext}
        </>
    )
}

BeautypageContainer.propTypes = propTypes;

export default enhance(BeautypageContainer);