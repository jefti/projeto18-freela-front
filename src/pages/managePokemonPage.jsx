import { useContext, useEffect } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext.jsx";
import { useNavigate } from "react-router-dom";

export default function ManagePokemonPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(()=>{
        if(!user.token) nav('/');
    },[])

    return (
        <ScreenWithBars>
            <DefaultPageContainer>
            {user.token?"nome :" + user.nome: "Não está logado"}
            </DefaultPageContainer>
        </ScreenWithBars>
    )
}