import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { withStyles } from "@material-ui/core/styles";
import '../../resources/beautypage/css/startup-materialize.css';
import '../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import { setExternalScriptsLoaded } from "./actions/beautypageActions";
import { loadExternalScripts } from "./utils/scriptLoader";
import { logoutUser } from './actions/auth/authActions';
import Beautypage from "./Beautypage";
import Beautywall from "./Beautywall";
import Beautyblog from "./Beautyblog";
import Beautyteam from "./Beautyteam";
import Beautysignup from "./Beautysignup";
import Beautyfeatures from "./Beautyfeatures";
import ErrorPage from "./components/error/ErrorPage";

const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    externalScriptsLoaded: PropTypes.bool.isRequired,
    setExternalScriptsLoaded: PropTypes.func.isRequired,
    logoutUser: PropTypes.func,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired,
    notification: PropTypes.object,
    profile: PropTypes.object
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id; // if we pass value to router
    const notifications = state.firestore.ordered.notifications;
    const notification = notifications ? notifications[id] : null;
    return {
        externalScriptsLoaded: state.beautypage.externalScriptsLoaded,
        authenticatedInCentralspace: state.centralspaceAuth.authenticatedInCentralspace,
        authenticationInFirebase: state.firebase.auth,
        notification,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = {
    setExternalScriptsLoaded,
    logoutUser
}; // or:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         logoutUser: (id) => { dispatch(logoutUser(id)) }
//     }
// }

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['createdAt', 'desc'] }
    ]),
    withStyles(styles)
);






import moment from 'moment';
moment(account.createdAt.toDate()).calendar()}

loaded if API call

- login message 
- hamburger
- navbar -> duplikaty

wywal skrypt loadera

jesli
to error i nic nie rob
Proxy error: Could not proxy request /app/public/users/authenticated from localhost:7777 to http://localhost:8088/.
See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNREFUSED).

https://reactjs.org/docs/error-boundaries.html



const BeautypageContainer = ({
    location,
    history,
    externalScriptsLoaded,
    setExternalScriptsLoaded,
    logoutUser,
    authenticatedInCentralspace,
    authenticationInFirebase,
    notification,
    profile
}) => {
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

    let beautypageContext;
    const logoutActionForLoggedUser = authenticatedInCentralspace || authenticationInFirebase.uid ?
        () => logoutUser(authenticatedInCentralspace, authenticationInFirebase, history)
        : null;

    switch (location.pathname) {
        case "/":
            beautypageContext = <Beautypage logoutUser={logoutActionForLoggedUser} />
            break
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