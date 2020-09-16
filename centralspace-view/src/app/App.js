import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './centralspace/styles/resource.css';
import Navbar from './centralspace/components/navigation/Navbar';
import Dashboard from './centralspace/components/dashboard/Dashboard';
import Contact from './centralspace/components/dashboard/Contact';
import AccountList from './centralspace/components/accountrest/AccountList';
import AccountDetails from './centralspace/components/account/AccountDetails';
import SignIn from './centralspace/components/auth/SignIn';
import SignUp from './centralspace/components/auth/SignUp';
import CreateAccount from './centralspace/components/account/CreateAccount';
import PrivateRoute from './centralspace/hoc/PrivateRoute';
import MaterializeCss from '../app/materializecss/MaterializeCss';
import Beautypage from '../app/beautypage/Beautypage';
import Beautyblog from '../app/beautypage/Beautyblog';
import Beautytransitions from '../app/beautypage/Beautytransitions';
import Beautywall from '../app/beautypage/Beautywall';
import Beautyteam from '../app/beautypage/Beautyteam';
import Beautysignup from '../app/beautypage/Beautysignup';
import AddressList from './centralspace/components/address/AddressList';
import ThemeContextProvider from './centralspace/contexts/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className="centralspace-view-app container"> */}
        <div className="centralspace-view-app">
          <Navbar />
        </div>
        
        {/* all this route objects have props, look at Contact  */}
        {/* In Nabbar we have empty props. But we can add withRouter */}
        <Switch> {/*switch only one component from top to bottom*/}
          <Route exact path='/materializecss' component={MaterializeCss} />
          <Route exact path='/beautypage' component={Beautypage} onUpdate />
          <Route exact path='/beautyblog' component={Beautyblog} />
          <Route exact path='/beautytransitions' component={Beautytransitions} />
          <Route exact path='/beautywall' component={Beautywall} />
          <Route exact path='/beautyteam' component={Beautyteam} />
          <Route exact path='/beautysignup' component={Beautysignup} />
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
      </BrowserRouter>
    );
  }
}

export default App;
