import React, { useEffect } from "react";
import loadjs from 'loadjs';

function BeautypageScriptsLoader() {
    useEffect(() => {
        loadjs([
            '/beautypage/js/materialize.min.js',
            '/beautypage/js/startup.js',
            '/beautypage/js/init.js',
            '/beautypage/js/nouislider.js',
            '/beautypage/js/stepper/mstepper.js'
        ],
        'foobar',
        { async: false, returnPromise: true });

        loadjs.ready('foobar', {
            success: function () {
                console.log("scripts loading successed")
            },
            error: function () { console.error("scripts loading failed") },
        });
    }, []);

    return (
        <>
            {/* TODO transform to basic js */}
        </>
    )
}

export default BeautypageScriptsLoader;