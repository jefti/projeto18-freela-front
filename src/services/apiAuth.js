import axios from "axios";
import ConfigToken from "./configToken";

const BASE_URL = "http://localhost:5000";


function login(body){
    const promise= axios.post(`${BASE_URL}/login`,body);
    return promise;
}

function cadastro(body){
    const promise= axios.post(`${BASE_URL}/registro`,body);
    return promise;
}

function logout(token){
    const config  = ConfigToken(token);
    const promise = axios.post(`${BASE_URL}/logout`,{},config);
    return promise;
}

const apiAuth = {login, cadastro, logout};

export default apiAuth;