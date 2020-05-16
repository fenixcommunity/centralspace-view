import React, { Component } from 'react'
import axios from 'axios'
import { authApi } from '../global/utils/CentralspaceApi'
import { Link } from 'react-router-dom'
import daVinciImg from '../../resource/da_vinci.jpg'

class AccountRestFetcher extends Component {
    state = {
        accounts: [],
        cross: ''
    }

    componentDidMount() { // or use effect? hook
        const Api = authApi();

        axios.all([Api.get('/account/all'), Api.get('/cross/centralspace-view-test')])
            .then( // returs promise
                axios.spread((accounts, cross) => {
                    this.setState({
                        accounts: accounts.data.slice(0, 10),
                        cross: cross.data.message
                    })
                })
            )
        // TODO!   Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
        // in AccountRestFetcher (created by Context.Consumer)
    }

    render() {
        const { accounts, cross } = this.state;
        const accountList = accounts.length ? (
            accounts.map(account => {
                return (
                    <div className="account card" key={account.login}>
                        <img src={daVinciImg} alt="human" />
                        <div className="card-content">
                            <Link to={'/account-rest/' + account.login}>
                                <span className="card-title"> {account.login}</span>
                            </Link>
                            <p>{account.mail}</p>
                            <p>{cross}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No accounts</div>
            )

        return (
            <div className="accounts container">
                {accountList}
            </div>
        )
    }
}

export default AccountRestFetcher;