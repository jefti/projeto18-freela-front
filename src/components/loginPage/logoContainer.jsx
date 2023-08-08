import pkbll from "../../assets/pkbll.png"
import { styled } from "styled-components";

export default function LogoContainer(){

    return(
    <SuperContainer>
        <LogoBox>
            <img src={pkbll} alt="pokeball" />     
            PokeModels
        </LogoBox>
        <span>Entrar como visitante...</span>
    </SuperContainer>

    );
}

const SuperContainer = styled.div`
    color: #4B4C4E;
    height: 14vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-size: 2.5vh;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    &:hover{
        span{
            visibility: visible;
            opacity: 1;
        }
    }
`

const LogoBox = styled.div`
    font-family: 'Dancing Script', cursive;
    font-size: 9vh;
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;
    img{
        height: 9vh;
        transition: transform 0.5s ease-in-out;
    }
    &:hover{
        cursor: pointer;
        img{
            transform: rotate(180deg);
        }
    }
`