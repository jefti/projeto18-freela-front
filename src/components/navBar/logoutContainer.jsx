import { useContext } from "react"
import { styled } from "styled-components"
import { UserContext } from "../../contexts/userContext"
import { useNavigate } from "react-router-dom";
import apiAuth from "../../services/apiAuth";

export default function LogoutContainer(){
    const {user, setUser} = useContext(UserContext);
    const nav = useNavigate();

    function handleLogout(){
        console.log(user.token);
        apiAuth.logout(user.token)
        .then(()=>{
            setUser({});
            nav('/');
        })
        .catch((err)=>{
            console.log(err.response.data);
            alert(err.response.data);
        });
    }

    function handleNavigate(){
        nav('/');
    }

    return (
        <>
        {user.token
        ?
            <LogoutContainerBox onClick={handleLogout}>
                <ion-icon name="log-in"></ion-icon>
                <p>Sair</p> 
            </LogoutContainerBox>
        :
        <LoginContainerBox onClick={handleNavigate}>
            <ion-icon name="log-out"></ion-icon>
            <p>Fazer login</p> 
        </LoginContainerBox>
        }
        </>
    )
}


const LoginContainerBox = styled.div`
    box-sizing: border-box;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    padding-bottom: 2vh;
    &:hover{
        cursor: pointer;
        color: green;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 0px;
        width: 20vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    @media (max-width: 768px) {
        padding: 0;
        p{
        display: none;
      }  
    }
`


const LogoutContainerBox = styled.div`
    box-sizing: border-box;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    padding-bottom: 2vh;

    &:hover{
        cursor: pointer;
        color: #be1010;
    }
    @media (max-width: 1024px) {
        flex-direction: column;
        padding-top: 0;
        width: 20vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content:center;
    }
    @media (max-width: 768px) {
        p{
        display: none;
      }  
    }
`