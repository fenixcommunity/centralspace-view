
export const refreshLoadedScripts = (includeGalleryThemeScripts) => {
    if (document) {
        document.launchBeautypageInitScript();
        document.launchBeautypageMaterializeScript();
        if (includeGalleryThemeScripts) {
            document.launchGalleryThemeScript();
            document.launchGalleryInitScript();
        }
    }
}