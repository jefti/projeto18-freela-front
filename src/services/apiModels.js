import axios from "axios";
import ConfigToken from "./configToken";

const BASE_URL = import.meta.env.VITE_API_URL;

function getYoursPokemons(token){
    const config = ConfigToken(token);
    //console.log(config);
    const promise = axios.get(`${BASE_URL}/yoursPokemons`,config);
    return promise;
}

function  getAllYoursPokemons(token){
    const config = ConfigToken(token);
    const promise = axios.get(`${BASE_URL}/allYoursPokemons`,config);
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

function getAny(key){
    const promise = axios.get(`${BASE_URL}/search/${key}`);
    return promise;
}

function setAvaliable(token,idPokemon,value){
    const config = ConfigToken(token);
    const promise = axios.put(`${BASE_URL}/setAvaliable/${idPokemon}/${value}`,{},config);
    return promise;
}

function postModel(body,token){
    const config = ConfigToken(token);
    const promise = axios.post(`${BASE_URL}/pokemon`,body,config);
    return promise;
}


const apiModels = {getYoursPokemons, getHomeList,getModelById,getAny,getAllYoursPokemons,setAvaliable,postModel};

export default apiModels;