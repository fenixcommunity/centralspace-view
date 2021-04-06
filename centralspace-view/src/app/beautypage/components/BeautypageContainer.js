import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect as connectRedux } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';
import { withStyles } from "@material-ui/core/styles";
import '../../../resources/beautypage/css/startup-materialize.css';
import '../../../resources/beautypage/css/search.css';
import './BeautypageStyleModification.css';
import { logoutUser } from '../actions/auth/authActions';
import useEvent from '../utils/hooksHelper'
import Beautypage from "./Beautypage";
import Beautywall from "./Beautywall";
import Beautyblog from "./Beautyblog";
import Beautyteam from "./Beautyteam";
import Beautysignup from "./Beautymix";
import Beautyfeatures from "./Beautyfeatures";
import ErrorPage from "../components/error/ErrorPage";

const propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    logoutUser: PropTypes.func,
    authenticatedInCentralspace: PropTypes.bool.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired,
    notification: PropTypes.object,
    profile: PropTypes.object
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id; // if we pass value to router
    const notifications = state.firestore.ordered.notifications;
    const notification = notifications ? notifications[id] : null;
    return {
        authenticatedInCentralspace: state.centralspaceAuth.authenticatedInCentralspace,
        authenticationInFirebase: state.firebase.auth,
        notification,
        profile: state.firebase.profile
    }
};

const mapDispatchToProps = {
    logoutUser
}; // or:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         logoutUser: (id) => { dispatch(logoutUser(id)) }
//     }
// }

const styles = theme => ({});

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'notifications', limit: 3, orderBy: ['createdAt', 'desc'] }
    ]),
    withStyles(styles)
);

const BeautypageContainer = ({
    location,
    history,
    logoutUser,
    authenticatedInCentralspace,
    authenticationInFirebase,
    notification,
    profile
}) => {
    let beautypageContext;
    const logoutActionForLoggedUser = authenticatedInCentralspace || authenticationInFirebase.uid ?
        () => logoutUser(authenticatedInCentralspace, authenticationInFirebase, history)
        : null;

        const postMessageEventExample = useCallback((event) => {
            if (event.data.type !== "postMessageEventExampleType") {
                return;
            }
            const { payload } = event.data.payload;
        });
        useEvent("message", postMessageEventExample);




//  TODO         Vercel + NextJs 


    switch (location.pathname) {
        case "/":
            beautypageContext = <Beautypage logoutUser={logoutActionForLoggedUser} />
            break
        case "/blog":
            beautypageContext = <Beautyblog logoutUser={logoutActionForLoggedUser} />
            break
        case "/team":
            beautypageContext = <Beautyteam logoutUser={logoutActionForLoggedUser} />
            break
        case "/features":
            beautypageContext = <Beautyfeatures logoutUser={logoutActionForLoggedUser} />
            break
        case "/wall":
            beautypageContext = <Beautywall logoutUser={logoutActionForLoggedUser} />
            break
        case "/other":
            beautypageContext = <Beautysignup logoutUser={logoutActionForLoggedUser}/>
            break
        default:
            beautypageContext = <ErrorPage />
    }

    return (
        <>
            {beautypageContext}
        </>
    )
}

BeautypageContainer.propTypes = propTypes;

export default enhance(BeautypageContainer);