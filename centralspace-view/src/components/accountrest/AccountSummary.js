import React from 'react'


function AccountSummary({ account }) {
    return (
        <div className="account card z-depth-0 account-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title green-text">
                    Account
                </span>
                <p className="grey-text">{account.login}</p>
                <p className="grey-text">{account.mail}</p>
                {/* Accounts Panel */}
            </div>
        </div>
    )
}

export default AccountSummary;