import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import StyleWrapper from '../../../hoc/StyleWrapper';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = this.initialState = {}
      }

    render() {
        const { accounts, notifications } = this.props;
        return (
            <div className="dashboard container">
             
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