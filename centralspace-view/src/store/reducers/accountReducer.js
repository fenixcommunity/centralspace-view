const initState = {
    accounts: [
        { id: 5645, login: 'MAXLOGIN2', mail: 'max3112@o2.pl', address: {} },
        { id: 777, login: 'MAX2', mail: 'maxaaaa2@o2.pl', address: {} }
    ],
    cross: ''
}

const accountReducer = (state = initState, action) => {
    // we cant' get data from server app in this place
    switch (action.type) {
        case 'CREATE_ACCOUNT':
            return state;
        case 'CREATE_ACCOUNT_ERROR':
            return state;
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        default:
            return state;
    }
}

export default accountReducer;