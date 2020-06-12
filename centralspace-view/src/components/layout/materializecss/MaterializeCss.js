import React from 'react';
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
    // todo change calendar style
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
