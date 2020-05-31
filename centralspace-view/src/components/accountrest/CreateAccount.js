import React from 'react';
import {connect} from 'react-redux';
import {createAccount} from '../../store/actions/accountActions';

export class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = this.initialState = {
            login: '',
            mail: '',
            description: ''
        }
      }
// todo firebase - NoSql document structure
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAccount(this.state)
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="green-text text-darken-3">Create Account</h5>
                    <div className="input-field">
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="mail">Mail</label>
                        <input type="email" id="mail" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea htmlFor="description" id="description" onChange={this.handleChange} className="materialize-textarea"/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAccount: (account) => dispatch(createAccount(account))
    }
}

export default connect(null, mapDispatchToProps)(CreateAccount)
