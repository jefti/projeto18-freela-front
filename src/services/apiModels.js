import axios from "axios";
import ConfigToken from "./configToken";

const BASE_URL = "http://localhost:5000";

function getYoursPokemons(token){
    const config = ConfigToken(token);
    //console.log(config);
    const promise = axios.get(`${BASE_URL}/yoursPokemons`,config);
    return promise;
}

function getHomeList(){
    const promise = axios.get(`${BASE_URL}/homeList`);
    return promise;
}

function getModelById(id){
    const promise = axios.get(`${BASE_URL}/getPokemon/${id}`);
    return promise;
}

const apiModels = {getYoursPokemons, getHomeList,getModelById};

export default apiModels;