const initState = {
    appLogs: []
}

const appLogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'APP_LOG_CREATE':
            return state;
        case 'APP_LOG_CREATE_ERROR':
            return {
                ...state,
                authError: action.error.message
            }
        case 'APP_LOG_DELETE':
            return state;
        case 'APP_LOG_DELETE_ERROR':
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default appLogReducer;