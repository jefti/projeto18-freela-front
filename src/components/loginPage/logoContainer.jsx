import { useNavigate } from "react-router-dom";
import pkbll from "../../assets/pkbll.png"
import { styled } from "styled-components";

export default function LogoContainer(){
    const nav = useNavigate();
    function handleNavegation(){
        nav('/home');
    }

    return(
    <SuperContainer onClick={handleNavegation}>
        <LogoBox>
            <img src={pkbll} alt="pokeball" />     
            PokeModels
        </LogoBox>
        <span>Entrar como visitante...</span>
        <p>Clique aqui para entrar como visitante</p>
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
        font-size: 1.2vw;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    &:hover{
        span{
            display: inline;
            visibility: visible;
            opacity: 1;
        }
    }
    p{
        display: none;
    }
    @media (max-width: 1024px) {
        span{
            visibility: none;
        }
        p{
            display: inline;
            opacity: 1;
            font-size: 2vw;
            text-decoration  : underline;
        }

        &:hover{
            span{
                display: none;
            }
        }
    }
    @media (max-width: 1024px) {
        span{
            display: none
        }
        p{
            font-size: 2.5vw;
        }
        &:hover{
            span{
                display: none;
            }
        }
    }
`

const LogoBox = styled.div`
    font-family: 'Dancing Script', cursive;
    font-size: min(9vh,6.8vw);
    font-weight: 700;
    display: flex;
    align-items: center;
    position: relative;
    img{
        height: min(7.5vh,5.2vw);
        transition: transform 0.5s ease-in-out;
    }
    &:hover{
        cursor: pointer;
        img{
            transform: rotate(180deg);
        }
    }

    @media (max-width: 1024px) {
        font-size: 9.2vw;
        img{
            height: 7vw;
        }
    }
    @media (max-width: 768px) {
        font-size: 12vw;
        img{
            height: 10vw;
        }
    }
`