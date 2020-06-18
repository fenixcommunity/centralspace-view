import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import Header from './components/Header';
import Features from './components/Features';
import PricingTables from './components/PricingTables';
import Blog from './components/Blog';
import Feature1 from './components/transitions/Feature1';
import Feature2 from './components/transitions/Feature2';
import Feature3 from './components/transitions/Feature3';
import Feature4 from './components/transitions/Feature4';
import Feature5 from './components/transitions/Feature5';

function Beautytransitions() {
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
            <Navbar isNavbarSolidTransition={true} isDarkMode={false} />
            <SlideOut />
            <Header />
            <Features isExtended={true} hasAnimation={true}/>
            <Blog isExtended={true} hasAnimation={true}/>
            <PricingTables isExtended={true}  hasAnimation={true}/>
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
            <Footer />
        </div>
    )
}

export default Beautytransitions;