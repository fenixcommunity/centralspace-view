import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './loader/BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import IntroductionAnimation from './components/blog/IntroductionAnimation';
import Blog from './components/blog/Blog';

function Beautyblog() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />
            <IntroductionAnimation headerMessage="Something Interesting" sentenceMessage="January 31, 2016" />
            <Blog />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautyblog;