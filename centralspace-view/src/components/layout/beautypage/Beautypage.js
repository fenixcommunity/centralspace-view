import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Header from './components/Header';
import Features from './components/Features';
import Clients from './components/Clients';
import PricingTables from './components/PricingTables';
import Blog from './components/Blog';
import GoogleMaps from './components/GoogleMaps';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// works also for mobile???
function Beautypage() {

    useEffect(() => {
        loadjs(['/beautypage/js/materialize.min.js', '/beautypage/js/startup.js', '/beautypage/js/init.js']);
        loadjs.ready('foobar', function () {
            console.log("loadjs")
        });
    }, []);


    return (
        <div>
            <Navbar />
            <SlideOut />
            <Header />
            <Features />
            <Clients />
            <PricingTables />
            <Blog />
            <GoogleMaps />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Beautypage;