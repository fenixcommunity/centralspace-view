import React, { useEffect } from "react";
import loadjs from 'loadjs';

function BeautypageScriptsLoader(props) {
    const basicScripts = [
        '/beautypage/js/materialize.min.js',
        '/beautypage/js/startup.js',
        '/beautypage/js/init.js',
        '/beautypage/js/nouislider.js',
        '/beautypage/js/stepper/mstepper.js'
    ]
    let contextPageScripts = [];
    const contextOfScripts = props.contextOfScripts;
    if (contextOfScripts && contextOfScripts === "galleryTheme") {
        contextPageScripts = contextPageScripts.concat([
            '/gallery/js/init.js',
            '/gallery/js/theme.js'
        ])
    }
    useEffect(() => {
        loadjs([...basicScripts, ...contextPageScripts],
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