import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteAccount } from '../../actions/accountActions'

class AccountDetails extends Component {

    handleClick = () => {
        this.props.deleteAccount(this.props.account.id);
        this.props.history.push('/account-rest');
    }

    render() {
        const account = this.props.account ? (
            <div className="account">
                <h4>account</h4>
                <p>{JSON.stringify(this.props.account)}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Account
                    </button>

                </div>
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

const mapStateToProps = (state, props) => {
    let login = props.match.params.login;

    // const Api = authApi();
    // Api.get('/account/login/' + login)
    //     .then(response => {
    //         this.setState({
    //             account: response.data
    //         })
    //     })

    return {
        account: state.accounts.find(account => account.login === login)
    }
}

const mapDispatchToProps = (dispatch) => { // instead store.dispatch(...
    return {
        // function attached to props
        deleteAccount: (id) => { dispatch(deleteAccount(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);