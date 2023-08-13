import { styled } from "styled-components";
import PokemonCardComponent from "./PokemonCardComponent";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext.jsx";
import apiModels from "../../services/apiModels.js";
import { useNavigate } from "react-router-dom";

export default function YoursPokemonContainer(){
    const [lista, setLista] = useState([]);
    const {user} = useContext(UserContext);
    const nav = useNavigate();


    useEffect(()=>{
        if(user.token){
            //console.log(user.token);
            apiModels.getYoursPokemons(user.token)
            .then((resp)=>{
                //console.log(resp.data);
                setLista(resp.data);
            })
            .catch((err)=>{console.log(err.response.data)});
        }
    },[]);
    
    let elementos = lista.map((item,index)=>(
        <PokemonCardComponent nome={item.nome} especie={item.especie} id={item.idPokemon} foto={item.foto} key={"yourpokemoncard"+index}></PokemonCardComponent>
    ));

    function handleNavigate(page,auth){
        if(auth){
            nav(page);
        } else{
            if(user.token){
                nav(page);
            } else{
                const shouldRedirect = window.confirm('É necessário estar logado para poder acessar essa página. Você deseja ser redirecionado para a página de login?');
                if (shouldRedirect) {
                  nav('/');
                }
            }
        }

    }

    return(
        <PokemonsContainer>
            <TitleCard>
                <TextoTitulo>Seus Pokemons:</TextoTitulo>
                <TextoAviso onClick={()=> handleNavigate('/my',false)}>Ver todos</TextoAviso>
            </TitleCard>
            {
            ((lista.length > 0)) 
            ? elementos
            : user.token && <TextoVazio >Você ainda não tem pokemons, cadastre alguns aqui...</TextoVazio >
            }
            {(!user.token) && <TextoVazio onClick={()=>handleNavigate('/',true)}>Faça o login para poder cadastrar seus pokemons...</TextoVazio>}
        </PokemonsContainer>
    );
}

const PokemonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleCard = styled.div`
    width: 18vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`
const TextoTitulo = styled.span`
    margin-left: 1vw;
    font-size: 1.6vw;
    font-weight: 400;
`
const TextoAviso = styled.span`
    font-size: 0.9vw;
    color: #333;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const TextoVazio = styled.div`
    margin-top: 1vh;
    margin-left: 1vw;
    font-size: 1.3vw;
    color: #be1010;
    display: flex;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
