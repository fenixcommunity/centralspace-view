import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, useLocation } from 'react-router-dom';
import Dashboard from '../centralspace-training/components/dashboard/Dashboard';
import AddressList from '../centralspace-training/components/address/AddressList';
import AccountDetails from '../centralspace-training/components/account/AccountDetails';
import SignIn from '../centralspace-training/components/auth/SignIn';
import SignUp from '../centralspace-training/components/auth/SignUp';
import CreateAccount from '../centralspace-training/components/account/CreateAccount';
import PrivateRoute from './PrivateRoute';
import BeautypageContainer from '../beautypage/BeautypageContainer';
import ErrorPage from '../beautypage/components/error/ErrorPage';
import { isLoggedUserStillAuthenticated } from '../beautypage/actions/authActions'
import ThemeContextProvider from '../centralspace-training/contexts/ThemeContext';
import BeautysigninContainer from '../beautypage/BeautysigninContainer';

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
    }, [location]);

    return (
        <Switch>
            {/*switch only one component from top to bottom*/}
            {/* all this route objects have props, look at Contact  */}
            {/* In Nabbar we have empty props. But we can add withRouter */}
            <PrivateRoute exact path='/beautypage' component={BeautypageContainer} onEnter onUpdate />
            <PrivateRoute exact path='/beautyblog' component={BeautypageContainer} />
            <PrivateRoute exact path='/beautyfeatures' component={BeautypageContainer} />
            <PrivateRoute exact path='/beautywall' component={BeautypageContainer} />
            <PrivateRoute exact path='/beautyteam' component={BeautypageContainer} />
            <Route exact path='/beautysignin' component={BeautysigninContainer} />
            <PrivateRoute exact path='/beautysignup' component={BeautypageContainer} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/account/:id' component={AccountDetails} /> {/*or remove account-list and use switch order*/}
            {/* <Route path='/account/:login' component={AccountDetails} /> */}
            <PrivateRoute path='/create-account' component={CreateAccount} />
            <Route path="*"
                children={
                    <ErrorPage headerText="Page Not Found" message="We can't seem to find the page you're looking for." noIcon={true} />
                } /> {/* PageNotFound */}
            <ThemeContextProvider>
                <PrivateRoute path='/address-list' component={AddressList} />
            </ThemeContextProvider>
        </Switch>

    );
};


RouteSwitcher.propTypes = propTypes;

export default enhance(RouteSwitcher);