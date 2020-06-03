import React from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../store/actions/accountActions';

export class CreateAccount extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.initialState = {
            login: '',
            mail: '',
            description: ''
        }
    }

    resetBuilder = () => {
        this.setState(this.initialState);
    }

    // todo firebase - NoSql document structure
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAccount(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="create-account container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="green-text text-darken-3">Create Account</h5>
                    <div className="input-field">
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" value={this.state.login} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="mail">Mail</label>
                        <input type="email" id="mail" value={this.state.mail} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea htmlFor="description" value={this.state.description} id="description" onChange={this.handleChange} className="materialize-textarea" />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                        <span className="btn" onClick={this.resetBuilder}>reset</span>
                        {/* or */}
                        {/* <a className="btn" onClick={() => { this.setState(this.initialState) }}>>reset</a> */}
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
