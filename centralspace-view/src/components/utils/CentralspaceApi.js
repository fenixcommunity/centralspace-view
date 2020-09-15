import axios from 'axios'

export const authApi = () => {
    const apiAuth = axios.create({
        baseURL: 'http://localhost:8088/app/api/',
        // timeout: 5000,
        auth: {
            username: 'admin',
            password: 'password'
        },
        withCredentials: true,
    });

    return apiAuth;
};
