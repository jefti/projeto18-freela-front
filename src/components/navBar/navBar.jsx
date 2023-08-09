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
                    <p>Home</p>
                </li>
                <li>
                    <ion-icon name="search"></ion-icon>
                    <p>Pesquisar</p>
                </li>
                <li>
                    <ion-icon name="logo-octocat"></ion-icon>
                    <p>Meus Pokemons</p>
                </li>
                <li className="Cadastrar">
                    <ion-icon name="create"></ion-icon>
                    <p>Cadastrar Pokemons</p>
                </li>
            </MenuOptions>
        </LogoContainer>

        <LogoutContainer>
            <ion-icon name="log-in"></ion-icon>
            <p>Fazer login</p>
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

const LogoContainer = styled.div`
    width: 20vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        flex-direction: row;
        
        width: 80vw;
        height: 10vh;
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
    span{
        margin-top: 3vh;
        font-family: 'Dancing Script', cursive;
        font-weight: 700;
        font-size: 3.5VW;
        &:hover{
            cursor: pointer;
            color: #666;
        }
        @media (max-width: 1024px) {
            font-size: 4.2vw;
            margin-top: 0;
            margin-left: 2vw;
            width: 20vw;
        }
        @media (max-width: 768px) {
            font-size: 10vw;

        }
    }
`

const MenuOptions = styled.ul`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.7vw;
    @media (max-width: 1024px) {
        margin: 0;
        flex-direction: row;
        width: 60vw;
        justify-content: space-evenly;
    }
    @media (max-width: 768px) {
        display: none;
    }


    li{
        border-bottom:solid 1px darkgray;
        padding-bottom: 1px;
        display: flex;
        flex-direction: row;
        &:hover{
            cursor: pointer;
            color: #666;
        }
        @media (max-width: 1024px) {
            display: flex;
            flex-direction: column;
            border-bottom: none;
            align-items: center;
            font-size: 2vw;
        }
        @media (max-width: 768px) {
            p{
                display: none;
            }
        }
    }
`

const LogoutContainer = styled.div`
    height: 20vh;
    padding-top: 15vh;
    box-sizing: border-box;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    &:hover{
        cursor: pointer;
        color: green;
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