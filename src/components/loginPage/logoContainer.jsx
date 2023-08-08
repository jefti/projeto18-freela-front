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
    //background-color: green;
    color: #4B4C4E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-size: 20px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
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
    font-size: 80px;
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;
    img{
        height: 63px;
        transition: transform 0.3s ease-in-out;
    }
    &:hover{
        cursor: pointer;
        img{
            transform: rotate(180deg);
        }
    }
`