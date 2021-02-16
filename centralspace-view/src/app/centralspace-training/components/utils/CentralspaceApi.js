import axios from 'axios'

export const authApi = () => {
    const apiAuth = axios.create({
        // baseURL: 'http://localhost:8088/app/api/', -> not needed, we use proxy
        // timeout: 5000,
        auth: {
            username: 'max3112',
            password: 'password1212@oqBB'
        },
        withCredentials: true,
    });

    return apiAuth;
};
