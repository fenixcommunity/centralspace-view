import React from "react";
import PropTypes from 'prop-types';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntroductionAnimation from './components/blog/IntroductionAnimation';
import Blog from './components/blog/Blog';

const propTypes = {
    logoutUser: PropTypes.func
}

const Beautyblog = ({logoutUser}) => {
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true}
                logoutUser={logoutUser} />
            <IntroductionAnimation headerMessage="Something Interesting" sentenceMessage="January 31, 2016" />
            <Blog />

            <Footer />
        </div>
    )
}

Beautyblog.propTypes = propTypes;

export default Beautyblog;