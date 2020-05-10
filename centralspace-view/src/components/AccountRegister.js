import React, { Component } from "react";
import './AccountRegister.css'

class AccountRegister extends Component {
  state = {
    code: null,
    name: null,
    type: null,
  }
  handleChange = (e) => {
    this.setState(
      {
        // account['name']
        [e.target.id]: e.target.value
      }
    )
  }
  handleRegister = (e) => {
    e.preventDefault();
    this.props.addAccount(this.state);
  }
  render() {
    return (

      /* todo  GET materializecss VIEW*/

      <div>
        <form className="account-register-form" onSubmit={this.handleRegister}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />

          <label htmlFor="type">Type:</label>
          <input type="text" id="type" onChange={this.handleChange} />

          <label htmlFor="code">Registration code:</label>
          <input type="text" id="code" onChange={this.handleChange} />

          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default AccountRegister;
