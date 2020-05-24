import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../styles/global/resource.css'
import Accounts from '../account/Accounts'
import Navbar from "../layout/Navbar"
import Dashboard from "../dashboard/Dashboard"
import Contact from "../dashboard/Contact"
import AccountList from "../accountrest/AccountList"
import AccountDetails from "../accountrest/AccountDetails"
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'
import CreateAccount from '../accountrest/CreateAccount'
import AccountSummary from "../accountrest/AccountSummary"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="centralspace-view-app container">
          <Navbar />
          {/* all this route objects have props, look at Contact  */}
          {/* In Nabbar we have empty props. But we can add withRouter */}
          <Switch> {/*switch only one component from top to bottom*/}
            <Route exact path='/' component={Dashboard} />
            <Route path='/accounts' component={Accounts} />
            <Route exact path='/account-list' component={AccountList} />
            <Route path='/account/:id' component={AccountDetails} /> {/*or remove account-list and use switch order*/}
            {/* <Route path='/account/:login' component={AccountDetails} /> */}
            <Route path='/contact' component={Contact} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create-account' component={CreateAccount} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
