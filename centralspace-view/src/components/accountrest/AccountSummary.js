import React from 'react';
import moment from 'moment';


function AccountSummary({ account }) {
    return (
        <div className="account card z-depth-0 account-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title green-text">
                    Account
                </span>
                <p className="grey-text">{account.login}</p>
                <p className="grey-text">{account.mail}</p>
                <p className="grey-text">{account.createdBy}</p>
                <p className="grey-text">{moment(account.createdAt.toDate()).calendar()}</p>
                {/* Accounts Panel */}
            </div>
        </div>
    )
}

export default AccountSummary;