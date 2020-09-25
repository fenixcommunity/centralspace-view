import React from 'react';
import AccountSummary from './AccountSummary';
import { Link } from 'react-router-dom';

//todo releacing AccountList
function AccountsPanel({ accounts }) {
    return (
        <div className="accounts-list section">
            {accounts && accounts.map(account => {
                return (
                    <Link to={'/account/' + account.id} key={account.id}>
                    <AccountSummary account={account}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default AccountsPanel;