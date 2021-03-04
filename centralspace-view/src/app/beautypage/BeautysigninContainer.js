import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import '../../resources/beautypage/css/search.css';
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import Beautysignin from "./Beautysignin";
import { handleSignInAction } from "./actions/beautysigninActions";
import { setExternalScriptsLoaded } from "./actions/beautypageActions";
import { loadExternalScripts } from "./loader/scriptLoader";

const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    authenticationInFirebase: PropTypes.object.isRequired,
    handleSignInAction: PropTypes.func.isRequired,
    externalScriptsLoaded: PropTypes.bool.isRequired,
    setExternalScriptsLoaded: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth,
    authenticatedInCentralspace: state.authReducer.authenticatedInCentralspace,
    authenticationAttemptFailed: state.beautysignin.authenticationAttemptFailed,
    externalScriptsLoaded: state.beautypage.externalScriptsLoaded
});

const mapDispatchToProps = {
    setExternalScriptsLoaded,
    handleSignInAction
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
    handleSignInAction,
    externalScriptsLoaded,
    setExternalScriptsLoaded
}) => {
 //todo remove scriptLoader
    useEffect(() => {
        loadExternalScripts("galleryTheme", externalScriptsLoaded, setExternalScriptsLoaded);
    }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
    
    if (authenticationInFirebase.uid || authenticatedInCentralspace) {
        history.push("/beautypage")
        return null;
    }

    return (
        <div>
            <Beautysignin
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationAttemptFailed={authenticationAttemptFailed}
                authenticationInFirebase={authenticationInFirebase}
                handleSignInAction={handleSignInAction}
            />
        </div>
    )
}

BeautysigninContainer.propTypes = propTypes;

export default enhance(BeautysigninContainer);