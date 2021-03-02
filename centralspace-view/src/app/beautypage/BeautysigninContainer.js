import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import '../../resources/beautypage/css/search.css';
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import Beautysignin from "./Beautysignin";
import { handleSignInAction } from "./actions/beautysigninActions";

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    authenticationInFirebase: PropTypes.object.isRequired,
    handleSignInAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth,
    authenticatedInCentralspace: state.beautysignin.authenticatedInCentralspace,
    authenticationAttemptFailed: state.beautysignin.authenticationAttemptFailed
});

const mapDispatchToProps = {
    handleSignInAction
};

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const BeautysigninContainer = ({ history, authenticationInFirebase, authenticatedInCentralspace, authenticationAttemptFailed, handleSignInAction }) => {
    return (
        <>
            <Beautysignin
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationAttemptFailed={authenticationAttemptFailed}
                authenticationInFirebase={authenticationInFirebase}
                handleSignInAction={handleSignInAction} />
        </>
    )
}

BeautysigninContainer.propTypes = propTypes;

export default enhance(BeautysigninContainer);