import React, { Component } from 'react';
import StyleWrapper from '../../hoc/StyleWrapper';
import Notifications from './Notifications';
import AccountsPanel from '../accountrest/AccountsPanel';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

class Dashboard extends Component {
    render() {
        const { accounts } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <AccountsPanel accounts={accounts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // accounts: state.account.accounts
        accounts: state.firestore.ordered.accounts
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'accounts'} // store sync with real db
    ])   
)(StyleWrapper(Dashboard));