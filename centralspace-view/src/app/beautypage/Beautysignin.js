import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SigninSection from './components/signin/SigninSection';

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    signIn: PropTypes.func.isRequired,
    logoutUser: PropTypes.func,
    setAuthenticationAttemptFailed: PropTypes.func.isRequired,
    clearAuthError: PropTypes.func.isRequired,
    setSignInMethod: PropTypes.func.isRequired,
    signInMethod: PropTypes.object,
    firebaseAuthError: PropTypes.string,
    mainTheme: PropTypes.string
}

const Beautysignin = ({
    history,
    authenticatedInCentralspace,
    authenticationAttemptFailed,
    signIn,
    logoutUser,
    setAuthenticationAttemptFailed,
    clearAuthError,
    setSignInMethod,
    signInMethod,
    firebaseAuthError,
    mainTheme
}) => {
    return (
        <>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true}
                logoutUser={logoutUser} />
            <SigninSection
                history={history}
                authenticatedInCentralspace={authenticatedInCentralspace}
                authenticationAttemptFailed={authenticationAttemptFailed}
                setAuthenticationAttemptFailed={setAuthenticationAttemptFailed}
                clearAuthError={clearAuthError}
                signIn={signIn}
                setSignInMethod={setSignInMethod}
                signInMethod={signInMethod}
                firebaseAuthError={firebaseAuthError}
                mainTheme={mainTheme}
            />
            <Footer />
        </>
    )
}

Beautysignin.propTypes = propTypes;

export default Beautysignin;
