import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import Animation from './components/blog/Animation';
import Blog from './components/blog/Blog';

function Beautyblog() {
    useEffect(() => {
        loadjs(['/beautypage/js/materialize.min.js', '/beautypage/js/startup.js', '/beautypage/js/init.js'],
            'foobar',
            { async: false, returnPromise: true });
        loadjs.ready('foobar', {
            success: function () { console.log("scripts loading successed") },
            error: function () { console.error("scripts loading failed") },
        });
    }, []);

    return (
        <div>
            <Navbar isNavbarSolidTransition={false} isDarkMode={true} />
            <SlideOut />
            <Animation />
            <Blog />
            <Footer />
        </div>
    )
}

export default Beautyblog;