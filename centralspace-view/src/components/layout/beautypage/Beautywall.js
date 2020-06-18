import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SlideOut from './components/SlideOut';
import PhoneWall from './components/phonewall/PhoneWall';

function Beautywall() {
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
            <Navbar isDarkMode={true} isPrimaryColor={true} />
            <SlideOut />
            <PhoneWall />
            <Features />
            <Footer />
        </div>
    )
}

export default Beautywall;