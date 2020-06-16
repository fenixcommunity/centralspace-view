import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/blog/Navbar';
import Animation from './components/blog/Animation';
import Blog from './components/blog/Blog';
import Footer from './components/blog/Footer';
import SlideOut from './components/SlideOut';

function Beautyblog() {
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
            <SlideOut />
            <Animation />
            <Blog />
            <Footer />
        </div>
    )
}

export default Beautyblog;