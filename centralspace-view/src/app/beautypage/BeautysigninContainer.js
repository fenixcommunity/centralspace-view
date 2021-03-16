import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import '../../resources/beautypage/css/search.css';
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import Beautysignin from "./Beautysignin";
import { signIn, setAuthenticationAttemptFailed, setSignInMethod } from "./actions/signinActions";
import { clearAuthError } from "./actions/auth/firebaseAuthActions";
import { setExternalScriptsLoaded } from "./actions/generalActions";
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
    clearAuthError: PropTypes.func.isRequired,
    setSignInMethod: PropTypes.func.isRequired,
    firebaseAuthError: PropTypes.string,
    mainTheme: PropTypes.string
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth,
    authenticatedInCentralspace: state.centralspaceAuth.authenticatedInCentralspace,
    authenticationAttemptFailed: state.signin.authenticationAttemptFailed,
    externalScriptsLoaded: state.general.externalScriptsLoaded,
    firebaseAuthError: state.firebaseAuth.authError,
    mainTheme: state.signin.mainTheme
});

const mapDispatchToProps = {
    setExternalScriptsLoaded,
    signIn,
    setAuthenticationAttemptFailed,
    clearAuthError,
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
    clearAuthError,
    externalScriptsLoaded,
    setExternalScriptsLoaded,
    signIn,
    setSignInMethod,
    firebaseAuthError,
    mainTheme
}) => {
 //todo remove scriptLoader
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
    
    if (authenticationInFirebase.uid || authenticatedInCentralspace) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <Beautysignin
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationInFirebase={authenticationInFirebase}
                authenticationAttemptFailed={authenticationAttemptFailed}
                setAuthenticationAttemptFailed={setAuthenticationAttemptFailed}
                clearAuthError={clearAuthError}
                signIn={signIn}
                setSignInMethod={setSignInMethod}
                firebaseAuthError={firebaseAuthError}
                mainTheme={mainTheme}
            />
        </div>
    )
}

BeautysigninContainer.propTypes = propTypes;

export default enhance(BeautysigninContainer);