import React from 'react';
import moment from 'moment';


function AccountSummary({ account }) {
    const archivedClass = account.active ? "blue-grey" : "grey"
 
    return (
        <div className="row">
            <div className="col s12">
            <div className={`card darken-1 ${archivedClass}`}>
                    <div className="card-content white-text">
                        <span className="card-title light-green-text">{account.login}</span>
                        <p className="grey-text">{account.mail}</p>
                        <p className="grey-text">{account.createdBy}</p>
                        <p className="grey-text">{moment(account.createdAt.toDate()).calendar()}</p>
                    </div>
                    <div className="card-action">
                        {/* <a href="#">This is a link</a>
                        <a href="#">This is a link</a> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountSummary;