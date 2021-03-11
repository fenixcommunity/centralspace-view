import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import '../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import { setExternalScriptsLoaded } from "./actions/beautypageActions";
import { loadExternalScripts } from "./utils/scriptLoader";
import Beautypage from "./Beautypage";
import Beautywall from "./Beautywall";
import Beautyblog from "./Beautyblog";
import Beautyteam from "./Beautyteam";
import Beautysignup from "./Beautysignup";
import Beautyfeatures from "./Beautyfeatures";
import ErrorPage from "./components/error/ErrorPage";
import { logoutUser } from './actions/authActions';

const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    externalScriptsLoaded: PropTypes.bool.isRequired,
    setExternalScriptsLoaded: PropTypes.func.isRequired,
    logoutUser: PropTypes.func,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    externalScriptsLoaded: state.beautypage.externalScriptsLoaded,
    authenticatedInCentralspace: state.authReducer.authenticatedInCentralspace,
    authenticationInFirebase: state.firebase.auth
}); // state from reducers

const mapDispatchToProps = {
    setExternalScriptsLoaded,
    logoutUser
}; //imported dispatchers

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);


import moment from 'moment';
moment(account.createdAt.toDate()).calendar()}

loaded if API call
Redirect zamiast history

jesli
to error i nic nie rob
Proxy error: Could not proxy request /app/public/users/authenticated from localhost:7777 to http://localhost:8088/.
See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).



const BeautypageContainer = ({
    location,
    history,
    externalScriptsLoaded,
    setExternalScriptsLoaded,
    logoutUser,
    authenticatedInCentralspace,
    authenticationInFirebase
}) => {
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    let beautypageContext;
    const logoutActionForLoggedUser = authenticatedInCentralspace || authenticationInFirebase.uid ?
        () => logoutUser(authenticatedInCentralspace, authenticationInFirebase, history)
        : null;
    switch (location.pathname) {
        case "/beautypage":
            beautypageContext = <Beautypage logoutUser={logoutActionForLoggedUser} />
            break
        case "/beautyblog":
            beautypageContext = <Beautyblog logoutUser={logoutActionForLoggedUser} />
            break
        case "/beautyteam":
            beautypageContext = <Beautyteam logoutUser={logoutActionForLoggedUser} />
            break
        case "/beautyfeatures":
            beautypageContext = <Beautyfeatures logoutUser={logoutActionForLoggedUser} />
            break
        case "/beautywall":
            beautypageContext = <Beautywall logoutUser={logoutActionForLoggedUser} />
            break
        case "/beautysignup":
            beautypageContext = <Beautysignup />
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