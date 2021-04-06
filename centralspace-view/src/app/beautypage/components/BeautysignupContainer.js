import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import '../../../resources/beautypage/css/search.css';
import '../../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import Beautysignup from "./Beautysignup";
import {
    signUp,
    setRegistrationAttemptFailed,
    setSignUpMethod,
    setPassword,
    setSignUpFormNotValid
} from "../actions/signUpActions";
import { clearAuthError } from "../actions/auth/firebaseAuthActions";
import { Redirect } from "react-router";


const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    signUp: PropTypes.func.isRequired,
    setRegistrationAttemptFailed: PropTypes.func.isRequired,
    clearAuthError: PropTypes.func.isRequired,
    setSignUpMethod: PropTypes.func.isRequired,
    signUpMethod: PropTypes.symbol,
    firebaseAuthError: PropTypes.string,
    mainTheme: PropTypes.string,
    loaderLoaded: PropTypes.bool,
    password: PropTypes.string,
    passwordRepeated: PropTypes.string,
    setPassword: PropTypes.func,
    signUpFormNotValid: PropTypes.bool,
    setSignUpFormNotValid: PropTypes.func
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth,
    authenticatedInCentralspace: state.centralspaceAuth.authenticatedInCentralspace,
    registrationAttemptFailed: state.signup.registrationAttemptFailed,
    firebaseAuthError: state.firebaseAuth.authError,
    mainTheme: state.signup.mainTheme,
    signUpMethod: state.signup.signUpMethod,
    loaderLoaded: state.general.loaderLoaded,
    password: state.signup.password,
    passwordRepeated: state.signup.passwordRepeated,
    signUpFormNotValid: state.signup.signUpFormNotValid
});

const mapDispatchToProps = {
    signUp,
    setRegistrationAttemptFailed,
    clearAuthError,
    setSignUpMethod,
    setPassword,
    setSignUpFormNotValid
};

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
);

const BeautysignupContainer = ({
    history,
    authenticationInFirebase,
    authenticatedInCentralspace,
    registrationAttemptFailed,
    setRegistrationAttemptFailed,
    clearAuthError,
    signUp,
    setSignUpMethod,
    signUpMethod,
    firebaseAuthError,
    mainTheme,
    loaderLoaded,
    setPassword,
    password,
    passwordRepeated,
    signUpFormNotValid,
    setSignUpFormNotValid
}) => {
    if (authenticationInFirebase.uid || authenticatedInCentralspace) {
        return <Redirect to='/' />;
    }

    return (
        <div>
            <Beautysignup
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationInFirebase={authenticationInFirebase}
                registrationAttemptFailed={registrationAttemptFailed}
                setRegistrationAttemptFailed={setRegistrationAttemptFailed}
                clearAuthError={clearAuthError}
                signUp={signUp}
                setSignUpMethod={setSignUpMethod}
                signUpMethod={signUpMethod}
                firebaseAuthError={firebaseAuthError}
                mainTheme={mainTheme}
                loaderLoaded={loaderLoaded}
                setPassword={setPassword}
                password={password}
                passwordRepeated={passwordRepeated}
                signUpFormNotValid={signUpFormNotValid}
                setSignUpFormNotValid={setSignUpFormNotValid}
            />
        </div>
    )
}

BeautysignupContainer.propTypes = propTypes;

export default enhance(BeautysignupContainer);