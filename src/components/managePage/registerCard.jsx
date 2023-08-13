import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
export default function RegisterCard(){
    const nav = useNavigate();
    function handleRedirect(){
        nav('/register');
    }

    return (
        <ContainerCard onClick={handleRedirect}>
            <ion-icon name="create"></ion-icon>
            <span>Registrar pokemon!</span>
        </ContainerCard>
    )
}

const ContainerCard = styled.div`
    width: 17vw;
    height: 40vh;

    margin: 1vh 1vw 1vh 1vw;
    border-radius: min(2vw,2vh);   
    box-sizing: border-box;
    border: 1px dashed #777;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; 

    font-size: 8vw;
    color: #777;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    &:hover{
        cursor: pointer;
        color: #aaa;
    }
    
    span{
        font-size: 1.7vw;
    }

    @media (max-width: 1024px) {
        width: 35vw;
        height: 30vh;
        font-size: 14vw;
        span{
        font-size: 4vw;
        }

    }

    @media (max-width: 768px) {
        width: 93vw;
        height: 20vh;
        flex-direction: row;
        span{
        font-size: 6vw;
        }
    }


`