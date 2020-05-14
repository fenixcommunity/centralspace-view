import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './resource.css'
import Accounts from '../account/Accounts'
import Navbar from "../navigation/Navbar"
import About from "../home/About"
import Contact from "../home/Contact"
import RestData from "../home/RestData"
import User from "../home/User"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="centralspace-view-app container">
          <Navbar />
          {/* all this route objects have props, look at Contact  */}
          {/* In Nabbar we have empty props. But we can add withRouter */}
          <Switch> {/*switch only one component from top to bottom*/}
          <Route exact path='/' component={About} />
          <Route path='/accounts' component={Accounts} />
          <Route exact path='/rest-data' component={RestData} />
          <Route path='/rest-data/:user_id' component={User} /> {/*or remov rest-data and use switch */}
          <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
