import React, { Component } from "react"
import AccountResume from "./AccountResume.js"
import AccountRegister from "./AccountRegister.js"

class Accounts extends Component {
    state = {
        accounts: [
            { id: 1, code: 4545, name: "basic account", type: "basic", },
            { id: 2, code: 234, name: "admin account", type: "advanced" }
        ]
    }

    addAccount = (account) => {
        account.id = Math.random() * 10;
        let accounts = [...this.state.accounts, account]  //spread operations (we get copy of existing list), we don't override
        this.setState({
            accounts: accounts
        })
    }
    deleteAccount = (id) => {
        let accounts = this.state.accounts.filter(account => {
            return account.id !== id;
        })
        this.setState({
            accounts: accounts
        })
    }
    //todo use Hook-s!
    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log(prevProps);
        console.log(prevState);
    }

    render() {
        return (
            <div>
                <h1 className="center green-text">Centralspace View</h1>
                <AccountResume accounts={this.state.accounts} deleteAccount={this.deleteAccount} />
                <AccountRegister addAccount={this.addAccount} />
            </div>
        );
    }
}

export default Accounts;
