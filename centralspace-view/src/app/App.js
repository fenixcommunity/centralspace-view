import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './centralspace-training/styles/resource.css';
import Navbar from './centralspace-training/components/navigation/Navbar';
import Dashboard from './centralspace-training/components/dashboard/Dashboard';
import Contact from './centralspace-training/components/dashboard/Contact';
import AccountList from './centralspace-training/components/accountrest/AccountList';
import AccountDetails from './centralspace-training/components/account/AccountDetails';
import SignIn from './centralspace-training/components/auth/SignIn';
import SignUp from './centralspace-training/components/auth/SignUp';
import CreateAccount from './centralspace-training/components/account/CreateAccount';
import PrivateRoute from './centralspace-training/hoc/PrivateRoute';
import BeautypageContainer from './beautypage/BeautypageContainer';
import AddressList from './centralspace-training/components/address/AddressList';
import ThemeContextProvider from './centralspace-training/contexts/ThemeContext';
import ScrollToTop from './utils/ScrollToTop';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/app">
        <ScrollToTop>
          {/* <div className="centralspace-view-app container"> */}
          <div className="centralspace-view-app">
            <Navbar />
          </div>

          {/* all this route objects have props, look at Contact  */}
          {/* In Nabbar we have empty props. But we can add withRouter */}
          <Switch> {/*switch only one component from top to bottom*/}
            <Route exact path='/beautypage' component={BeautypageContainer} onUpdate />
            <Route exact path='/beautyblog' component={BeautypageContainer} />
            <Route exact path='/beautyfeatures' component={BeautypageContainer} />
            <Route exact path='/beautywall' component={BeautypageContainer} />
            <Route exact path='/beautyteam' component={BeautypageContainer} />
            <Route exact path='/beautysignup' component={BeautypageContainer} />
            <Route path='/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/account-list' component={AccountList} />
            <PrivateRoute path='/account/:id' component={AccountDetails} /> {/*or remove account-list and use switch order*/}
            {/* <Route path='/account/:login' component={AccountDetails} /> */}
            <PrivateRoute path='/create-account' component={CreateAccount} />
          </Switch>
          <ThemeContextProvider>
            <PrivateRoute path='/address-list' component={AddressList} />
          </ThemeContextProvider>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
