import React, { useEffect } from "react";
import loadjs from 'loadjs';
import '../../../resources/beautypage/css/startup-materialize.css'
import './Beautypage.css'
import Navbar from './components/Navbar';
import SlideOut from './components/SlideOut';
import Footer from './components/Footer';
import TeamHeader from './components/team/TeamHeader';
import Team from './components/team/Team';

function Beautyteam() {
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
            <Navbar isNavbarSolidTransition={true} isDarkMode={true} />
            <SlideOut />
            <TeamHeader />
            <Team />
            <Footer />
        </div>
    )
}

export default Beautyteam;