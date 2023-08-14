import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext.jsx";
import { useNavigate } from "react-router-dom";
import MyPokemonCard from "../components/managePage/myPokemonCard.jsx";
import RegisterCard from "../components/managePage/registerCard.jsx";
import apiModels from "../services/apiModels.js";

export default function ManagePokemonPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    const [listaPokemon,setListaPokemon] = useState([]);

    const [refresh, setRefresh] = useState(true);
    const reiniciarPagina = function (){
        setRefresh(!refresh);
    };
    
    const cardLista = listaPokemon.map((el)=>
        <MyPokemonCard infos={el} reiniciarPagina={reiniciarPagina}></MyPokemonCard>
    );

    useEffect(()=>{
        if(!user.token) nav('/');
        else{
            apiModels.getAllYoursPokemons(user.token)
            .then((resp)=>{
                // console.log(resp.data);
                setListaPokemon(resp.data);
            })
            .catch((err)=>console.log(err));
        }
    },[refresh])






    return (
        <ScreenWithBars>
            <DefaultPageContainer>
            {user.token
            ?<Titulo>Seus Pokemons:</Titulo>
            : "Não está logado"}
            <PokemonsContainer>
                {cardLista}
                <RegisterCard></RegisterCard>
            </PokemonsContainer>
            </DefaultPageContainer>
        </ScreenWithBars>
    )
}


const Titulo = styled.div`
    font-size: 3vw;
    width: 58vw;
    border-bottom: 1px solid black;
    @media (max-width: 1024px) {
        font-size: 5vw;
        width: 76vw;
    }
    @media (max-width: 1024px) {
        font-size: 7vw;
        width: 96vw;
    }
`

const PokemonsContainer = styled.div`
    width: 58vw;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
        width: 76vw;
    }
    @media (max-width: 768px) {
        width: 95vw;
        flex-direction: column;
    }

`