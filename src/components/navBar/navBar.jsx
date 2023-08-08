import { styled } from "styled-components"
import pkbll from '../../assets/pkbll.png';

export default function NavBar(){
    return (
    <SuperContainer>
        <LogoContainer>
           <span>PokeModels</span> 
            <MenuOptions>
                <li>
                    <ion-icon name="home"></ion-icon>
                    Home
                </li>
                <li>
                    <ion-icon name="search"></ion-icon>
                    Procurar
                </li>
                <li>
                    <ion-icon name="logo-octocat"></ion-icon>
                    Meus pokemons
                </li>
                <li>
                    <ion-icon name="create"></ion-icon>
                    Cadastrar pokemons
                </li>
            </MenuOptions>
        </LogoContainer>
        
        <LogoutContainer>
            <ion-icon name="log-in"></ion-icon>
            Fazer login
        </LogoutContainer>

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
    box-sizing: border-box;
    box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.2);
    position: relative;
    ion-icon{
            margin-right: 6px;
    }
`

const LogoContainer = styled.div`
    margin-top: 40px;
    width: 20vw;
    min-height: 50px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    Span{
        font-family: 'Dancing Script', cursive;
        font-weight: 700;
        font-size: 3.5VW;
        &:hover{
            cursor: pointer;
            color: #666;
        }
    }
`

const MenuOptions = styled.ul`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.7vw;
    li{
        border-bottom:solid 1px darkgray;
        padding: 2px;        
        &:hover{
            cursor: pointer;
            color: #666;
        }
    }
`

const LogoutContainer = styled.div`
    font-size: 1.7vw;
    position: absolute;
    display: flex;
    bottom: 15px;
    left: 15px;
    &:hover{
        cursor: pointer;
        //color  :  #be1010;
        color: green;
    }
`