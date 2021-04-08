import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import treeFogg from '../../../../resources/beautypage/images/background.jpg';
import ErrorPageContent from './ErrorPageContent';

const propTypes = {
    headerText: PropTypes.string,
    message: PropTypes.string,
    goToFunc: PropTypes.func,
    noIcon: PropTypes.bool,
    goToIconName: PropTypes.string
}

const ErrorPage = ({ headerText, message, goToFunc, noIcon, goToIconName }) => {
    const refreshPage = () => { 
        window.location.reload(); 
    }
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={true}
                isDarkMode={false}
                basicSearchIsActive={true}
                fullScreenSearchIsActive={false} />
            <ErrorPageContent
                headerText={headerText ? headerText : "Oops, an error occured"}
                message={message ? message : "Please refresh this page"}
                goToFunc={goToFunc ? goToFunc : refreshPage}
                noIcon={noIcon}
                goToIconName={goToIconName ? goToIconName : "refresh"}
                backgroundImg={treeFogg} />
        </div>
    )
}

ErrorPage.propTypes = propTypes;

export default ErrorPage;
