import axios from "axios";

const BASE_URL = "http://localhost:5000";

function login(body){
    const promise= axios.post(`${BASE_URL}/login`,body);
    return promise;
}

function cadastro(body){
    const promise= axios.post(`${BASE_URL}/registro`,body);
    return promise;
}

const apiAuth = {login, cadastro};

export default apiAuth;