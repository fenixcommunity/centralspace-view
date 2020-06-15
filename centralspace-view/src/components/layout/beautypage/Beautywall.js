import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/transitions/Navbar';
import PhoneWall from './components/phonewall/PhoneWall';
import Features from './components/transitions/Features';
import Footer from './components/phonewall/Footer';

function Beautywall() {
    useEffect(() => {
        loadjs(['/beautypage/js/materialize.min.js', '/beautypage/js/startup.js', '/beautypage/js/init.js'],
         'foobar',
         {async: false, returnPromise: true });
        loadjs.ready('foobar', {
            success: function() { /* foo.js & bar.js loaded */ },
            error: function() { /* foobar bundle load failed */ },
          });
    }, []);


    return (
        <div>
            <Navbar />
            <PhoneWall />
            <Features />
            <Footer />
        </div>
    )
}

export default Beautywall;