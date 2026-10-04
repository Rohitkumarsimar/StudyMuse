// used axios to make api calls to the backend instead of fetch api because axios has more features and is easier to use.

import axios from "axios"

export const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    headers : {   
    'content-type' : 'application/json'
    }
});

api.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')//path to storage 
    if(token){
        config.headers.Authorization = `bearer ${token}`;
    }
    return config;
});

