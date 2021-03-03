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
    handleSignInAction: PropTypes.func.isRequired
}

const Beautysignin = ({ history, authenticatedInCentralspace, authenticationAttemptFailed, handleSignInAction }) => {
    return (
        <>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
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
