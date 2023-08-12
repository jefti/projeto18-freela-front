import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { UserContext } from "../../contexts/userContext";

export default function FooterNav(){
    const nav = useNavigate();
    const {user} = useContext(UserContext);


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

    return (
        <FooterBar>
                <MenuOptions>
                    <li onClick={()=> handleNavigate('/home',true)}>
                        <ion-icon name="home"></ion-icon>
                    </li>
                    <li onClick={()=> handleNavigate('/search',true)}>
                        <ion-icon name="search"></ion-icon>
                    </li>
                    <li onClick={()=> handleNavigate('/my',false)}>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </li>
                </MenuOptions>
        </FooterBar>
    );
}

const FooterBar = styled.div`
    background-color:#dcdcdc;       
    display: none;
    position: fixed;
    z-index: 100;
    bottom: 0px;
    width:100vw;
    height: 10vh;
    @media (max-width:768px) {
        display: inline;
        box-sizing: border-box;
        border-top: 1px solid darkgray;
        box-shadow: 0px -4px 6px -2px rgba(0, 0, 0, 0.2);
    }
`
const MenuOptions = styled.ul`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 8vw;
`

