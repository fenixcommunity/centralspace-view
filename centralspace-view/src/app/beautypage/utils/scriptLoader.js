import loadjs from 'loadjs';
import { refreshLoadedScripts } from "./scriptRefresher"
import { APP_BASIC_URL } from "../../config/appConfig"

export const loadExternalScripts = (
    contextOfScripts,
    externalScriptsLoaded,
    setExternalScriptsLoaded
) => {
    const includeGalleryThemeScripts = contextOfScripts && contextOfScripts === "galleryTheme";
        refreshLoadedScripts(includeGalleryThemeScripts);
        return;
    // not needed to load -> all scripts placed in index.html

    const basicScripts = []
    let contextPageScripts = [];
    if (includeGalleryThemeScripts) {
        contextPageScripts = contextPageScripts.concat([])
    }

    loadScripts([...basicScripts, ...contextPageScripts], setExternalScriptsLoaded)
}

const loadScripts = (scripts, setExternalScriptsLoaded) => {
    const scriptsWithAppBasicPath = scripts.map((script => {
        return `${APP_BASIC_URL}${script}`;
    }))
    loadjs(scriptsWithAppBasicPath,
        'foobar',
        { async: false, returnPromise: true });

    loadjs.ready('foobar', {
        success: function () {
            setExternalScriptsLoaded(true);
        },
        error: function () {
            setExternalScriptsLoaded(false)
        }
    });
}