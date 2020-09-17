import React from "react";
import '../../resources/beautypage/css/startup-materialize.css';
import './BeautypageStyleModification.css';
import BeautypageScriptsLoader from './BeautypageScriptsLoader';
import Navbar from './components/navbar/Navbar';
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
            <Animation />
            <Blog />

            <BeautypageScriptsLoader contextOfScripts="galleryTheme" />
            <Footer />
        </div>
    )
}

export default Beautyblog;