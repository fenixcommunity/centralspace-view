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
    setSignInMethod: PropTypes.func.isRequired,
    firebaseAuthError: PropTypes.string
}

const Beautysignin = ({
    history,
    authenticatedInCentralspace,
    authenticationAttemptFailed,
    signIn,
    logoutUser,
    setAuthenticationAttemptFailed,
    setSignInMethod,
    firebaseAuthError
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
                signIn={signIn}
                setSignInMethod={setSignInMethod}
                firebaseAuthError={firebaseAuthError}
            />
            <Footer />
        </>
    )
}

Beautysignin.propTypes = propTypes;

export default Beautysignin;
