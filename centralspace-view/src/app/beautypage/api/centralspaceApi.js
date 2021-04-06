import axios from 'axios';
import { APP_BASIC_URL, API_BASIC_URL } from '../config/appConfig';

export const ApiCaller = () => {
    const apiAuth = axios.create({
        // baseURL: 'http://localhost:8088/app/api/', -> not needed, we use proxy
        // timeout: 5000,
        // auth: {
        //     username: 'max3112',
        //     password: 'password1212@oqBB'
        // },
        // withCredentials: true
    });

    return apiAuth;
};

export const Api = {
    auth: {
        isAuthenticated: `${APP_BASIC_URL}/public/users/authenticated`,
        signin: `${APP_BASIC_URL}/public/users/signin`,
        logout: `${APP_BASIC_URL}/public/users/logout-call`,
        signup: `${API_BASIC_URL}/register/submit`
    },
    utils: { 
        userTracker: 'https://ipapi.co/json/'
    }
};

// example
// axios.all([Api.get('/app/api/account/all'), Api.get('/cross/centralspace-view-test')])
// .then( 
//     axios.spread((accounts, cross) => {
//     ...
//     })
// )