import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect as connectRedux } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, useLocation } from 'react-router-dom';
import '../styles/resource.css';
import Dashboard from '../components/dashboard/Dashboard';
import Contact from '../components/dashboard/Contact';
import AccountList from '../components/accountrest/AccountList';
import AddressList from '../components/address/AddressList';
import AccountDetails from '../components/account/AccountDetails';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import CreateAccount from '../components/account/CreateAccount';
import PrivateRoute from '../hoc/PrivateRoute';
import BeautypageContainer from '../../beautypage/BeautypageContainer';
import ErrorPage from '../../beautypage/components/error/ErrorPage';
import { checkUserAuth } from '../auth/actions/authActions'
import ThemeContextProvider from '../contexts/ThemeContext';

const propTypes = {
    checkUserAuth: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    checkUserAuth
};

const enhance = compose(
    connectRedux(null, mapDispatchToProps)
);

const RouteSwitcher = ({ checkUserAuth }) => {

    const location = useLocation();
    useEffect(() => {
        checkUserAuth(location);
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
            <Route exact path='/beautysignin' component={BeautypageContainer} />
            <PrivateRoute exact path='/beautysignup' component={BeautypageContainer} />
            <Route path='/contact' component={Contact} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/account-list' component={AccountList} />
            <PrivateRoute path='/account/:id' component={AccountDetails} /> {/*or remove account-list and use switch order*/}
            {/* <Route path='/account/:login' component={AccountDetails} /> */}
            <PrivateRoute path='/create-account' component={CreateAccount} />
            <ThemeContextProvider>
                <PrivateRoute path='/address-list' component={AddressList} />
            </ThemeContextProvider>
            <Route path="*"
                children={
                    <ErrorPage headerText="Page Not Found" message="We can't seem to find the page you're looking for." noIcon={true} />
                } /> {/* PageNotFound */}
        </Switch>

    );
};


RouteSwitcher.propTypes = propTypes;

export default enhance(RouteSwitcher);