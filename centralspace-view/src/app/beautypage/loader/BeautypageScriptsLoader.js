import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import loadjs from 'loadjs';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const BeautypageScriptsLoader = ({}) => {
    //  TODO - if only beautypage (without materializecss) than set all scripts as global(index.html)
    const basicScripts = [
        '/beautypage/js/main/materialize_v2.min.js',
        '/beautypage/js/main/init.js',
        '/beautypage/js/helper/nouislider.js',
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
    }, [basicScripts, contextPageScripts]);

    return (
        <>
            {/* TODO transform to basic js */}
        </>
    )
}

BeautypageScriptsLoader.propTypes = propTypes;

export default BeautypageScriptsLoader;