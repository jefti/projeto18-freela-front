import { useContext, useEffect } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext.jsx";
import { useNavigate } from "react-router-dom";

export default function ErroPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(()=>{
        if(user.token) nav('/home');
        else nav('/');
    },[]);


    return (
        <ScreenWithBars>
            <DefaultPageContainer>

            </DefaultPageContainer>
        </ScreenWithBars>
    )
}