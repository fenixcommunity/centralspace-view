import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import '../../resources/beautypage/css/search.css';
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import Beautysignin from "./Beautysignin";
import { signIn, setAuthenticationAttemptFailed, setSignInMethod } from "./actions/beautysigninActions";
import { setExternalScriptsLoaded } from "./actions/beautypageActions";
import { loadExternalScripts } from "./utils/scriptLoader";
import { Redirect } from "react-router";


const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    signIn: PropTypes.func.isRequired,
    externalScriptsLoaded: PropTypes.bool.isRequired,
    setExternalScriptsLoaded: PropTypes.func.isRequired,
    setAuthenticationAttemptFailed: PropTypes.func.isRequired,
    setSignInMethod: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth,
    authenticatedInCentralspace: state.authReducer.authenticatedInCentralspace,
    authenticationAttemptFailed: state.beautysignin.authenticationAttemptFailed,
    externalScriptsLoaded: state.beautypage.externalScriptsLoaded
});

const mapDispatchToProps = {
    setExternalScriptsLoaded,
    signIn,
    setAuthenticationAttemptFailed,
    setSignInMethod
};

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const BeautysigninContainer = ({
    location,
    history,
    authenticationInFirebase,
    authenticatedInCentralspace,
    authenticationAttemptFailed,
    setAuthenticationAttemptFailed,
    externalScriptsLoaded,
    setExternalScriptsLoaded,
    signIn,
    setSignInMethod
}) => {
 //todo remove scriptLoader
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
    
    if (authenticationInFirebase.uid || authenticatedInCentralspace) {
        return <Redirect to='/beautypage' />;
    }

    return (
        <div>
            <Beautysignin
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationInFirebase={authenticationInFirebase}
                authenticationAttemptFailed={authenticationAttemptFailed}
                setAuthenticationAttemptFailed={setAuthenticationAttemptFailed}
                signIn={signIn}
                setSignInMethod={setSignInMethod}
            />
        </div>
    )
}

BeautysigninContainer.propTypes = propTypes;

export default enhance(BeautysigninContainer);