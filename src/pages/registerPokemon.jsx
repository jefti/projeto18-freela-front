import { useContext, useDebugValue, useEffect } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext.jsx";
import { useNavigate } from "react-router-dom";
import RegisterPokemonForm from "../components/registerPokemon/registerPokemonForm.jsx";

export default function RegisterPokemonPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    
    useEffect(()=>{
        if(!user.token) nav('/');
    },[]);

    return (
        <ScreenWithBars>
            <DefaultPageContainer>
                <RegisterPokemonForm></RegisterPokemonForm>
            </DefaultPageContainer>
        </ScreenWithBars>
    )
}