import { authApi } from '../../../app/centralspace-training/components/utils/CentralspaceApi';

export const handleSignInAction = (event, history) => (dispatch) => {
    event.preventDefault();

    const target = event.target;
    const username = target.username;
    const password = target.password;
    const bodyFormData = new FormData(); // or new FormData(event.target);
    bodyFormData.append(username.id, username.value);
    bodyFormData.append(password.id, password.value);

    const mstepper = document.mstepper;
    authApi().post(
        '/app/public/users/signin',
        bodyFormData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            if (response.status === 200) {
                dispatch(setAuthenticatedInCentralspace(true));
                if (mstepper) {
                    mstepper.correctStep()
                }
                setTimeout(() => {
                    history.push("/beautypage");
                }, 1500)
            }
        })
        .catch(function (response) {
            dispatch(setAuthenticatedInCentralspace(false));
            if (mstepper) {
                mstepper.wrongStep();
            }
        });
}


const setAuthenticatedInCentralspace = (authenticatedInCentralspace) => (dispatch) => {
    dispatch({
        type: "BSIGN_SET_AUTHENTICATED_IN_CENTRALSPACE",
        authenticatedInCentralspace
    });
};