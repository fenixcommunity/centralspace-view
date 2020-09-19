import React, { useEffect } from "react";
import loadjs from 'loadjs';

function BeautypageScriptsLoader(props) {
    //  TODO - if only beautypage (without materializecss) than set all scripts as global(index.html)
    const basicScripts = [
        '/beautypage/js/main/materialize.min.js',
        '/beautypage/js/main/startup.js',
        '/beautypage/js/main/init.js',
        '/beautypage/js/helpers/nouislider.js',
        '/beautypage/js/stepper/mstepper.js'
    ]
    let contextPageScripts = [];
    const contextOfScripts = props.contextOfScripts;
    if (contextOfScripts && contextOfScripts === "galleryTheme") {
        contextPageScripts = contextPageScripts.concat([
            '/beautypage/js/gallery/init.js',
            '/beautypage/js/gallery/theme.js'
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