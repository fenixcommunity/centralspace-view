const initState = {
    accounts: [
        { id: 1, login: 'MAXLOGIN2', mail: 'max2@o2.pl', address: {} }
    ],
    cross: ''
}

const globalReducer = (state = initState, action) => {
    if (action.type === 'DELETE_ACCOUNT') {
        let newAccounts = state.accounts.filter(account => {
            return account.id !== action.id
        });
        return {
            ...state,
            accounts: newAccounts
        }
    }

    return state;
}

export default globalReducer