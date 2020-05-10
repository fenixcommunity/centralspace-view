import React from "react";

// functional component (we don't need state) - oposite to class(container) component
function AccountResume({ accounts, deleteAccount }) {
  //   const { accounts } = props;
  const accountsToShow = accounts.length ? accounts.map(account => {
    return account.type !== "xxx" ? (
      <div className="account collection-item" key={account.id}>
        {/* if we set onClick={deleteAccount(account.id)} it will be invoked auto. Better to use anonymous function onClick={() => */}
        <span onClick={() => { deleteAccount(account.id) }}> {account.name} - {account.type}</span>
        {/* <button onClick={() => { deleteAccount(account.id) }}>  Delete </button> */}
      </div>
    ) : null;
  }) : (
      <p className="center">No accounts to show</p>
    );

  return (
    <div className="account-list collection">
      {accountsToShow}
    </div>
  )
}

export default AccountResume;
