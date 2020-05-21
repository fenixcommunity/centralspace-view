import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './resource.css'
import Accounts from '../account/Accounts'
import Navbar from "../layout/Navbar"
import Dashboard from "../dashboard/Dashboard"
import Contact from "../dashboard/Contact"
import AccountList from "../accountrest/AccountList"
import AccountDetails from "../accountrest/AccountDetails"

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
            <Route exact path='/account-rest' component={AccountList} />
            <Route path='/account-rest/:login' component={AccountDetails} /> {/*or remove account-rest and use switch */}
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
