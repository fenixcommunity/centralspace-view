
export const setExternalScriptsLoaded = (scriptsLoaded) => (dispatch) => {
    dispatch({
        type: "BP_SET_EXTERNAL_SCRIPTS_LOADED",
        scriptsLoaded
    });
};

export const setLoaderLoaded = (isLoaderLoaded) => (dispatch) => {
    dispatch({
        type: "BP_SET_LOADER_LOADED",
        isLoaderLoaded
    });
};