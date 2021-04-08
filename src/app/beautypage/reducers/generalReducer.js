export const initialState = {
    externalScriptsLoaded: false,
    loaderLoaded: false
};


const generalReducer = (state = initialState, action) => {
    switch (action.type) {

        case "BP_SET_EXTERNAL_SCRIPTS_LOADED": {
            const { scriptsLoaded } = action;
            return {
                ...initialState,
                externalScriptsLoaded: scriptsLoaded
            };
        }

        case "BP_CLEAR_EXTERNAL_SCRIPTS_LOADED": {
            return {
                ...initialState,
                externalScriptsLoaded: initialState.externalScriptsLoaded
            };
        }

        case "BP_SET_LOADER_LOADED": {
            const { isLoaderLoaded } = action;
            return {
                ...initialState,
                loaderLoaded: isLoaderLoaded
            };
        }

        default:
            return state;
    }
};

export default generalReducer;
