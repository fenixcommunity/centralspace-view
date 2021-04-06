import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SignUpSection from './signup/SignUpSection';

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    signUp: PropTypes.func.isRequired,
    logoutUser: PropTypes.func,
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

const Beautysignup = ({
    history,
    authenticatedInCentralspace,
    registrationAttemptFailed,
    signUp,
    logoutUser,
    setRegistrationAttemptFailed,
    clearAuthError,
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
    return (
        <>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true}
                logoutUser={logoutUser} />
            <SignUpSection
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
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
            <Footer />
        </>
    )
}

Beautysignup.propTypes = propTypes;

export default Beautysignup;
