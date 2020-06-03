import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../styles/global/resource.css';
import Navbar from '../layout/Navbar';
import Dashboard from '../dashboard/Dashboard';
import Contact from '../dashboard/Contact';
import AccountList from '../accountrest/AccountList';
import AccountDetails from '../account/AccountDetails';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateAccount from '../account/CreateAccount';
import PrivateRoute from '../../hoc/PrivateRoute';
import MaterializeCss from '../layout/materializecss/MaterializeCss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className="centralspace-view-app container"> */}
        <div className="centralspace-view-app">
          <Navbar />
          {/* all this route objects have props, look at Contact  */}
          {/* In Nabbar we have empty props. But we can add withRouter */}
          <Switch> {/*switch only one component from top to bottom*/}
            <Route exact path='/materializecss' component={MaterializeCss} />
            <Route path='/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute exact path='/account-list' component={AccountList} />
            <PrivateRoute path='/account/:id' component={AccountDetails} /> {/*or remove account-list and use switch order*/}
            {/* <Route path='/account/:login' component={AccountDetails} /> */}

            <PrivateRoute path='/create-account' component={CreateAccount} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
