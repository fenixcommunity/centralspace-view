import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { deleteAccount } from '../../store/actions/accountActions';

function AccountDetails(props) {

    //todo only for components, move!
    const handleClick = () => {
        props.deleteAccount(props.account.id);
        props.history.push('/account-list');
    }

    const {account} = props;
    const accountToRender = account ? (
        <div className="account">
            <h4>{account.login}</h4>
            <p>{JSON.stringify(account)}</p>
            <div className="center">
                <button className="btn grey" onClick={handleClick}>
                    Delete Account
                    </button>
            </div>
        </div>

    ) : (
            <div className="center">Loading account...</div>
        )

    return (
        <div className="container section account-details">
            {accountToRender}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    // let login = props.match.params.login;
    // const Api = authApi();
    // Api.get('/account/login/' + login)
    //     .then(response => {
    //         this.setState({
    //             account: response.data
    //         })
    //     })

    // return {
    //todo we use firebase
    //  account: state.accounts.find(account => account.login === login)

    // }

    let id = props.match.params.id;
    const accounts = state.firestore.data.accounts;
    const account = accounts ? accounts[id] : null;
    return {
        account: account
    }
}

const mapDispatchToProps = (dispatch) => { // instead store.dispatch(...
    return {
        // function attached to props
        deleteAccount: (id) => { dispatch(deleteAccount(id)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [
        { collection: 'accounts', doc: props.match.params.id }
    ])
)(AccountDetails);
