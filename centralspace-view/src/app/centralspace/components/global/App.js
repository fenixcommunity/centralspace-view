import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../styles/global/resource.css';
import Navbar from '../centralspaceapp/navigation/Navbar';
import Dashboard from '../centralspaceapp/dashboard/Dashboard';
import Contact from '../centralspaceapp/dashboard/Contact';
import AccountList from '../centralspaceapp/accountrest/AccountList';
import AccountDetails from '../centralspaceapp/account/AccountDetails';
import SignIn from '../centralspaceapp/auth/SignIn';
import SignUp from '../centralspaceapp/auth/SignUp';
import CreateAccount from '../centralspaceapp/account/CreateAccount';
import PrivateRoute from '../../hoc/PrivateRoute';
import MaterializeCss from '../app/materializecss/MaterializeCss';
import Beautypage from '../app/beautypage/Beautypage';
import Beautyblog from '../app/beautypage/Beautyblog';
import Beautyfeatures from '../app/beautypage/Beautyfeatures';
import Beautywall from '../app/beautypage/Beautywall';
import Beautyteam from '../app/beautypage/Beautyteam';
import Beautysignup from '../app/beautypage/Beautysignup';
import AddressList from '../centralspaceapp/address/AddressList';
import ThemeContextProvider from '../../contexts/ThemeContext';

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
          <Route exact path='/beautyfeatures' component={Beautyfeatures} />
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
