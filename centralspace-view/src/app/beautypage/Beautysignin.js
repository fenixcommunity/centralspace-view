import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SigninSection from './components/signin/SigninSection';

const propTypes = {
    history: PropTypes.object.isRequired,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationAttemptFailed: PropTypes.bool,
    authenticationInFirebase: PropTypes.object.isRequired,
    handleSignInAction: PropTypes.func.isRequired,
    logoutUser: PropTypes.func
}

const Beautysignin = ({ history, authenticatedInCentralspace, authenticationAttemptFailed, handleSignInAction, logoutUser }) => {
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
                handleSignInAction={handleSignInAction} />
            <Footer />
        </>
    )
}

Beautysignin.propTypes = propTypes;

export default Beautysignin;
