import loadjs from 'loadjs';
import { refreshLoadedScripts } from "./scriptRefresher"

export const loadExternalScripts = (
    contextOfScripts,
    externalScriptsLoaded,
    setExternalScriptsLoaded
) => {
    const includeGalleryThemeScripts = contextOfScripts && contextOfScripts === "galleryTheme";
    if (externalScriptsLoaded) {
        refreshLoadedScripts(includeGalleryThemeScripts);
        return;
    }

    const basicScripts = [
        '/beautypage/js/main/materialize_v2.min.js',
        '/beautypage/js/main/init.js',
        '/beautypage/js/helper/nouislider.js',
        '/beautypage/js/stepper/mstepper.js'
    ]
    let contextPageScripts = [];
    if (includeGalleryThemeScripts) {
        contextPageScripts = contextPageScripts.concat([
            '/beautypage/js/gallery/init.js',
            '/beautypage/js/gallery/theme.js'
        ])
    }

    loadScripts([...basicScripts, ...contextPageScripts], setExternalScriptsLoaded)
}

const loadScripts = (scripts, setExternalScriptsLoaded) => {
    loadjs(scripts,
        'foobar',
        { async: false, returnPromise: true });

    loadjs.ready('foobar', {
        success: function () {
            setExternalScriptsLoaded(true);
            console.log("scripts loading successed")
        },
        error: function () { console.error("scripts loading failed") },
    });
}