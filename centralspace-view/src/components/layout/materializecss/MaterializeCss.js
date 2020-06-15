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

// works also for mobile
function MaterializeCss() {
    useEffect(() => {
        loadjs(['/materializecss/project/js/materialize.min.js', '/materializecss/project/css/materialize.min.css'],
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
            <Photo />
            <Parallax1 />
            <Services />
            <Parallax2 />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default MaterializeCss;
