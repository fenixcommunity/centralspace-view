import React, { Component } from "react"
import './AccountRegister.css'

class AccountRegister extends Component {
  constructor(props) {
    super(props)

    this.state = this.initialState = {
      code: '',
      name: '',
      type: ''
    }
  }

  resetBuilder() {
    this.setState(this.initialState);
  }

  handleChange = (e) => {
    this.setState(
      {
        // account['name'] or name: e.target.value
        [e.target.id]: e.target.value
      }
    )
  }
  handleRegister = (e) => {
    e.preventDefault();
    this.props.addAccount(this.state);
    this.resetBuilder();

  }

  render() {
    return (

      /* todo  GET materializecss VIEW*/

      <div>
        <form className="account-register-form" onSubmit={this.handleRegister}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />

          <label htmlFor="type">Type:</label>
          <input type="text" id="type" value={this.state.type} onChange={this.handleChange} />

          <label htmlFor="code">Registration code:</label>
          <input type="text" id="code" value={this.state.code} onChange={this.handleChange} />

          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default AccountRegister;
