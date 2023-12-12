import axios from "axios";
import ConfigToken from "./configToken";

const BASE_URL = import.meta.env.VITE_API_URL;

function getYoursPokemons(token){
    const config = ConfigToken(token);
    const promise = axios.get(`${BASE_URL}/user/Pokemons/resume`,config);
    return promise;
}

function  getAllYoursPokemons(token){
    const config = ConfigToken(token);
    const promise = axios.get(`${BASE_URL}/user/pokemons/all`,config);
    return promise;
}


function getHomeList(){
    const promise = axios.get(`${BASE_URL}/home`);
    return promise;
}

function getModelById(id){
    const promise = axios.get(`${BASE_URL}/pokemon/${id}`);
    return promise;
}

function getAny(key){
    const promise = axios.get(`${BASE_URL}/search/${key}`);
    return promise;
}

function setAvaliable(token,idPokemon,value){
    const config = ConfigToken(token);
    const promise = axios.put(`${BASE_URL}/pokemon/${idPokemon}/${value}`,{},config);
    return promise;
}

function postModel(body,token){
    const config = ConfigToken(token);
    const promise = axios.post(`${BASE_URL}/user/pokemon`,body,config);
    return promise;
}


const apiModels = {getYoursPokemons, getHomeList,getModelById,getAny,getAllYoursPokemons,setAvaliable,postModel};

export default apiModels;