import { styled } from "styled-components";
import { useContext, useEffect } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext.jsx";
import { useNavigate } from "react-router-dom";
import MyPokemonCard from "../components/managePage/myPokemonCard.jsx";
import RegisterCard from "../components/managePage/registerCard.jsx";

export default function ManagePokemonPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(()=>{
        if(!user.token) nav('/');
    },[])

    return (
        <ScreenWithBars>
            <DefaultPageContainer>
            {user.token
            ?<Titulo>Seus Pokemons:</Titulo>
            : "Não está logado"}
            <PokemonsContainer>
                <MyPokemonCard></MyPokemonCard>
                <MyPokemonCard></MyPokemonCard>
                <MyPokemonCard></MyPokemonCard>
                <MyPokemonCard></MyPokemonCard>
                <MyPokemonCard></MyPokemonCard>
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