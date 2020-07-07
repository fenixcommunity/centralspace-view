import React from "react";
import '../../../resources/beautypage/css/startup-materialize.css';
import './Beautypage.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import Animation from './components/blog/Animation';
import Blog from './components/blog/Blog';

function Beautyblog() {

    return (
        <div>
            <Navbar
                isNavbarSolidTransition={false}
                isDarkMode={true}
                fullScreenSearchIsActive={true} />

            <SlideOut />
            <Animation />
            <Blog />

            <BeautypageScriptsLoader />
            <Footer />
        </div>
    )
}

export default Beautyblog;