import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import StyleWrapper from '../../hoc/StyleWrapper';
import Notifications from './Notifications';
import AccountsPanel from '../account/AccountsPanel';
import Loader from '../global/Loader'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = this.initialState = {}
      }

    render() {
        const { accounts, notifications } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <AccountsPanel accounts={accounts} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                </div>
                <Loader />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // accounts: state.account.accounts
        accounts: state.firestore.ordered.accounts,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'accounts', orderBy: ['createdAt', 'desc'] }, // store sync with real db
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] } // sto
    ])
)(StyleWrapper(Dashboard));