import React, { useEffect } from "react";
import loadjs from 'loadjs';
import './MaterializeStyle.css'
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import Parallax1 from './components/Parallax1';
import Services from './components/Services';
import Parallax2 from './components/Parallax2';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import M from 'materialize-css/dist/js/materialize.js';

// works also for mobile
function MaterializeCss() {
    useEffect(() => {
        loadjs(['/materializecss/project/css/materialize.min.css'],
            'foobar',
            { async: false, returnPromise: true });
        loadjs.ready('foobar', {
            success: function () {
                M.AutoInit();
            },
            error: function () { console.error("scripts loading failed") },
        });

    }, []);

    return (
        <div>
            <Navbar />
            
            <Photo />
            <Parallax1 /> {/* works only when we will romove startup-materialize style, but it main styles for beautypage */}
            <Services />
            <Parallax2 /> {/* works only when we will romove startup-materialize style, but it main styles for beautypage*/}
            <ContactForm />

            <Footer />
        </div>
    )
}

export default MaterializeCss;
