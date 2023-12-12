import { styled } from "styled-components";

import { useContext, useState } from "react";
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from "react-router-dom";
import apiModels from "../../services/apiModels";

export default function MyPokemonCard({infos,reiniciarPagina}){
    const nav = useNavigate();
    const {user} = useContext(UserContext);
    console.log(infos);

    function handleNavigate(){
        nav(`/pokemon/${infos.id}`);
    }

    function handleChangeAvaliable(e) {
        apiModels.setAvaliable(user.token, infos.id,!(infos.disponivel))
        .then((resp)=>{
            reiniciarPagina();
        })
        .catch((err)=>{console.log(err.response.data)});
    }
    return (
        < ContainerCard >
            <PokemonImage src={infos.foto} onClick={handleNavigate}></PokemonImage>
            <PokemonNome>
                {infos.nome}
                <span>{infos.especie}</span>
            </PokemonNome>
            <CheckContainer onClick={handleChangeAvaliable}>
                <span>Disponível ?</span>

                {infos.disponivel?
                    (<ion-icon name="checkbox"></ion-icon>)
                    :(
                        <p>
                            <ion-icon name="checkbox-outline"></ion-icon>
                        </p>
                    )
                }
                

            </CheckContainer>
        </ContainerCard>
    );
}

const ContainerCard = styled.div`
    width: 17vw;
    height: 40vh;
    background-color: white;
    margin: 1vh 1vw 1vh 1vw;
    border-radius: min(2vw,2vh);
    padding: min(2vw,2vh);
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; 
    position: relative;
    @media (max-width: 1024px) {
        width: 35vw;
        height: 30vh;
        &:hover{
        cursor: pointer;
        img{
            filter: none;
        }
    }
    }
    @media (max-width: 768px) {
        width: 93vw;
        height: 20vh;
    }

    &:hover{
        cursor: pointer;
    }
`
const PokemonImage = styled.img`
    position: absolute;
    top: min(2vw,2vh);
    left: min(2vw,2vh);
    border-radius: min(2vw,2vh);

    width: 15vw;
    height: 36vh;
    box-sizing: border-box;
    object-fit: cover;
    object-position: center;

    z-index: 2;
    @media (max-width: 1024px) {
        width: 31vw;
        height: 27vh;
    }
    @media (max-width: 768px) {
        width: 89vw;
        height: 18vh;
    }
`

const PokemonNome = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 0 0 2vh 0 ;
    width: 12vw;
    height: 7vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.3vh;
    font-weight: 800;
    z-index: 3;
    span{
        font-size: 1.5vh;
        font-weight: 400;
        color: #444;
    }

    @media (max-width: 1024px) {
        width: 20vw;
        height: 5vh;
    }

    @media (max-width: 768px) {
        width: 35vw;
        height: 5vh;
        font-size: 5vw;
        span{
            display: none;
        }
    }

`

const CheckContainer = styled.div`
    position: absolute;
    bottom: 2.5vh;
    right: 1.5vw;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    padding: 10px;
    background-color: white;
    font-size: 3vh;
    color: green;
    span{
        font-size: 18px;
        color: #444;
        font-weight: 600;
        margin-bottom: 8px;
    }
    p{
        color: #444;
    }
    @media (max-width: 768px) {
        width: auto;
        font-size: 2vh;
        span{
        font-size: 10px;
        color: #444;
        font-weight: 600;
        margin-bottom: 2px;
        }
    }
`