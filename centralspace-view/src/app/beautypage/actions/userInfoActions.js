import { ApiCaller, Api } from '../../beautypage/api/centralspaceApi';

export const getUserData = () => (dispatch) => {
    ApiCaller().get(Api.utils.userTracker).then((response) => {
        dispatch({
            type: "BP_SET_USER_INFO",
            userData: response.data
        })
    }).catch((error) => {
        dispatch({ type: "BP_CLEAN_USER_INFO" })
    });
}