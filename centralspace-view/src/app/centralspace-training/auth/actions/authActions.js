import { ApiCaller, Api } from '../../../config/api/centralspaceApi';
import { setAuthenticatedInCentralspace } from '../../../beautypage/actions/authActions';

export const checkUserAuth = (location) => (dispatch) => {
    ApiCaller().post(Api.auth.isAuthenticated, { locationPath: location.pathname })
        .then((response) => {
            dispatch(setAuthenticatedInCentralspace(response.status === 200));
        })
        .catch(() => {
            dispatch(setAuthenticatedInCentralspace(false));
        });
}