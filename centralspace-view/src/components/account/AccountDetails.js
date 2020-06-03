import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { archiveAccount, deleteAccount } from '../../store/actions/accountActions';
import Loader from '../global/Loader'

function AccountDetails(props) {

    //todo only for components, move!
    const id = props.match.params.id;
    const redirectAfterAction = () => {
        // props.history.push('/account-list');
        props.history.push('/');
    }
    const handleDeleteAccountClick = () => {
        props.deleteAccount(id);
        redirectAfterAction();
    }

    const handleArchiveAccountClick = () => {
        props.archiveAccount(id);
        redirectAfterAction();
    }

    const { account } = props;
    const accountToRender = account ? (
        <div className="account">
            <h4>{account.login}</h4>
            <p>{JSON.stringify(account)}</p>
            <div className="row right">
                <div className="col">
                    <a href="#!" onClick={handleDeleteAccountClick} className="red waves-effect waves-light btn-large"><i className="material-icons right">send</i> Delete</a>
                </div>
                <div className="col">
                    <a href="#!" onClick={handleArchiveAccountClick} className="grey red waves-effect waves-light btn-large">
                        <i className="material-icons right">cloud</i> Archive</a>
                </div>
            </div>
        </div>

    ) : (
            <Loader />
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
    let accounts = state.firestore.data.accounts;
    let account = accounts ? accounts[id] : null;
    return {
        account: account
    }
}

const mapDispatchToProps = (dispatch) => { // instead store.dispatch(...
    return {
        // function attached to props
        // deleteAccount: (id) => { dispatch(deleteAccount(id)) }
        archiveAccount: (id) => { dispatch(archiveAccount(id)) },
        deleteAccount: (id) => { dispatch(deleteAccount(id)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => [
        { collection: 'accounts', doc: props.match.params.id }
    ])
)(AccountDetails);
