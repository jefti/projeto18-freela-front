import { styled } from "styled-components"

export default function MenuContainer(){
    return (
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
    );
}

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