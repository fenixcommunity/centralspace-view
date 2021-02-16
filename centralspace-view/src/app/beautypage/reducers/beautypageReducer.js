export const initialState = {
    externalScriptsLoaded: false
};


const beautypageReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
};

export default beautypageReducer;
