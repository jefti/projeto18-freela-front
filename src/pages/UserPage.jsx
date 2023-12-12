import { useContext, useEffect } from "react";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";
import { DefaultPageContainer } from "../styles/formStyle";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UserInformationBox from "../components/userPage/userInformationBox";

export default function UserPage(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(() => 
    {
        if(!user.nome) nav('/');
	}, []);
    
    return (
        <ScreenWithBars>
            <DefaultPageContainer>
                <PageUserContainer>
                    <FotoContainer>
                        <img src={user.foto} alt="foto de perfil" />
                    </FotoContainer>
                    <InfosUsuarioContainer>
                        <UserInformationBox categoria="Nome" informacao={user.nome}></UserInformationBox>
                        <UserInformationBox categoria="Email" informacao={user.email}></UserInformationBox>
                        <UserInformationBox categoria="Telefone" informacao={user.phone}></UserInformationBox>
                    </InfosUsuarioContainer>
                </PageUserContainer>
            </DefaultPageContainer>
        </ScreenWithBars>
    );
}


const PageUserContainer = styled.div`
    width: 58vw;
    height: 95vh;
    display: flex;
    flex-direction: rows;
`
const FotoContainer = styled.div`
    width: 40vw;
    height: 95vh;
    img{
        width: 40vw;
        height: 95vh;
        object-fit: cover;
        border-radius: 2vw;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
    @media (max-width: 1024px) {
        width: 50vw;
        height: 85vh;
        img{
            width: 50vw;
            height: 85vh;
        }
    }
         
`
const InfosUsuarioContainer = styled.div`
    width: 18vw;
    height: 95vh;
    @media (max-width: 1024px) {
        width: 28vw;
    }   
    @media (max-width: 768px) {
        width: 48vw;
    }   
`
