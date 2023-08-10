import { styled } from "styled-components"
import MenuContainer from "./menuContainer"
import LogoutContainer from "./logoutContainer"

export default function NavBar(){
    return (
    <SuperContainer>
        <MenuContainer></MenuContainer>
        <LogoutContainer></LogoutContainer>
    </SuperContainer>
    )
}

const SuperContainer = styled.div`
    background: linear-gradient(to bottom, #dcdcdc, #c0c0c0);
    border-right: solid 1px lightgray;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    position: relative;

    img{
        display: none;
    }
    ion-icon{
        margin-right: 6px;
    }

    @media (max-width: 1024px) {
        background: none;
        background-color:#dcdcdc;

        flex-direction: row;
        
        width: 100vw;
        height: 10vh;

        box-shadow: none;
        border-bottom: solid 1px darkgray;

        align-items: center;
        justify-content: center;

        ion-icon{
            margin-right: 0;
            font-size: 4vw;
        }
        .Cadastrar{
            display: none;
        }
    }

    @media (max-width: 768px) {
            box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        ion-icon{
            font-size: 6vw;
        }
        img{
            display: inline;
            width: 80px;
        }
    }

`