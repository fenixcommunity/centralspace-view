import React from "react";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntroductionAnimation from './components/blog/IntroductionAnimation';
import Blog from './components/blog/Blog';

const propTypes = {}

const Beautyblog = () => {
    return (
        <div>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <IntroductionAnimation headerMessage="Something Interesting" sentenceMessage="January 31, 2016" />
            <Blog />

            <Footer />
        </div>
    )
}

Beautyblog.propTypes = propTypes;

export default Beautyblog;