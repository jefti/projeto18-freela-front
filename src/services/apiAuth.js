import axios from "axios";

const BASE_URL = "http://localhost:5000";

function configToken(token){
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return config;
}

function login(body){
    const promise= axios.post(`${BASE_URL}/login`,body);
    return promise;
}

function cadastro(body){
    const promise= axios.post(`${BASE_URL}/registro`,body);
    return promise;
}

function logout(token){
    const config  = configToken(token);
    console.log(config);
    console.log(`${BASE_URL}/logout`);
    const promise = axios.post(`${BASE_URL}/logout`,{},config);
    return promise;
}

const apiAuth = {login, cadastro, logout};

export default apiAuth;