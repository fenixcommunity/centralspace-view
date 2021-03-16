import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, useLocation } from 'react-router-dom';
import TrainingExample from '../../training/components/TrainingExample';
import PrivateRoute from './PrivateRoute';
import BeautypageContainer from '../components/BeautypageContainer';
import ErrorPage from '../components/error/ErrorPage';
import { isLoggedUserStillAuthenticated } from '../actions/auth/centralspaceAuthActions'
import ThemeContextProvider from '../../training/components/ThemeContext';
import BeautysigninContainer from '../components/BeautysigninContainer';

const propTypes = {
    isLoggedUserStillAuthenticated: PropTypes.func.isRequired,
    authenticationInFirebase: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    authenticationInFirebase: state.firebase.auth
});

const mapDispatchToProps = {
    isLoggedUserStillAuthenticated
};

const enhance = compose(
    connectRedux(mapStateToProps, mapDispatchToProps)
);

const RouteSwitcher = ({ isLoggedUserStillAuthenticated, authenticationInFirebase }) => {

    const location = useLocation();
    useEffect(() => {
        // we don't verify auth for firebase
        if (!authenticationInFirebase.uid) {
            isLoggedUserStillAuthenticated(location);
        }
    }, [location]);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Switch>
            {/*switch only one component from top to bottom*/}
            {/* all this route objects have props, look at Contact  */}
            {/* In Nabbar we have empty props. But we can add withRouter */}
            <PrivateRoute exact path='/' component={BeautypageContainer} />
            {/* <PrivateRoute path='beautypage/:id' component={BeautypageContainer} /> {/* */}
            <PrivateRoute exact path='/main' component={BeautypageContainer} onEnter onUpdate />
            <PrivateRoute exact path='/blog' component={BeautypageContainer} />
            <PrivateRoute exact path='/features' component={BeautypageContainer} />
            <PrivateRoute exact path='/wall' component={BeautypageContainer} />
            <PrivateRoute exact path='/team' component={BeautypageContainer} />
            <PrivateRoute exact path='/other' component={BeautypageContainer} />
            <Route exact path='/signin' component={BeautysigninContainer} />
            <Route path="*"
                children={
                    <ErrorPage headerText="Page Not Found" message="We can't seem to find the page you're looking for." noIcon={true} />
                } /> {/* PageNotFound */}
            <ThemeContextProvider>
                <PrivateRoute path='/training-example' component={TrainingExample} />
            </ThemeContextProvider>
        </Switch>

    );
};


RouteSwitcher.propTypes = propTypes;

export default enhance(RouteSwitcher);