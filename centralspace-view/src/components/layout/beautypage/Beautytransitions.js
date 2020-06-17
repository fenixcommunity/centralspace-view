import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import Header from './components/transitions/Header';
import Features from './components/transitions/Features';
import Pricing from './components/transitions/Pricing';
import Blog from './components/transitions/Blog';
import Feature1 from './components/transitions/Feature1';
import Feature3 from './components/transitions/Feature3';
import Feature4 from './components/transitions/Feature4';
import Feature5 from './components/transitions/Feature5';
import Feature6 from './components/transitions/Feature6';



function Beautytransitions() {
    useEffect(() => {
        loadjs(['/beautypage/js/materialize.min.js', '/beautypage/js/startup.js', '/beautypage/js/init.js'],
            'foobar',
            { async: false, returnPromise: true });
        loadjs.ready('foobar', {
            success: function () { /* foo.js & bar.js loaded */ },
            error: function () { /* foobar bundle load failed */ },
        });
    }, []);


    return (
        <div>
            <Navbar isNavbarSolidTransition={true} isDarkMode={false} />
            <SlideOut />
            <Header />
            <Features />
            <Pricing />
            <Blog />
            <Feature1 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
            <Feature6 />
            <Footer />
        </div>
    )
}

export default Beautytransitions;