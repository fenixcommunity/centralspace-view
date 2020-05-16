import React, { Component } from 'react'
import { authApi } from '../global/utils/CentralspaceApi'

class AccountRest extends Component {
    state = {
        account: null
    }
    componentDidMount() {
        const Api = authApi();
        let login = this.props.match.params.login;
        Api.get('/account/login/' + login)
            .then(response => {
                this.setState({
                    account: response.data
                })
            })
    }


    render() {
        const account = this.state.account ? (
            <div className="account">
                <h4>account</h4>
                <p>{JSON.stringify(this.state.account)}</p>
            </div>

        ) : (
                <div className="center">Loading account...</div>
            )

        return (
            <div className="container">
                {account}
            </div>
        )
    }
}

export default AccountRest;