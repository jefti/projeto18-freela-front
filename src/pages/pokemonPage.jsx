import { useEffect, useState } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import apiModels from "../services/apiModels.js";
import { useNavigate, useParams } from "react-router-dom";
import PokemonImage from "../components/pokemonPage/pokemonImage.jsx";

export default function PokemonPage(){
    const {id} = useParams();
    const [infos,setInfos] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        apiModels.getModelById(id)
        .then((resp)=>{
            console.log(resp.data);
            setInfos(resp.data);
        })
        .catch((err)=>{
            alert(err.response.data);
            nav('/home');
        });
    },[id]);

    return (
        <ScreenWithBars>
            <DefaultPageContainer>
                {infos.nome?
                (
                    <PokemonImage infos={infos}></PokemonImage>
                )
                :("Pokemon não foi encontrado!")}
            </DefaultPageContainer>
        </ScreenWithBars>
    )
}