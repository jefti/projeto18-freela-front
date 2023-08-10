import { styled } from "styled-components"

export const SuperForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            height: 6vh;
            width: 25vw;
            min-width: 360px;
            margin: 0.4vh;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2vh;
            margin-bottom: 3vh;
            border: none;
            border-radius: 1.4vh;
            height: 55px;
            width: 340px;
            background-color: #e21414; 
            font-size: 24px;
            padding: 10px;
            color: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

            &:hover{
                cursor: pointer;
                background-color: #cb1212;
            }

            &:active {
                border-bottom: var(--border);
                transform: translateY(5px);
            }
        }
    }
    
    @media (max-width: 1024px) {
        form{
            input{
                height: 6vh;
                width: 70vw;
                margin: 0.4vh;
                min-width: 10px;
            }
        }  
    }
    @media (max-width: 768px) {
        form{
            input{
                height: 6vh;
                width: 70vw;
                margin: 0.4vh;
                min-width: 10px;
            }
            button{
                font-size: 3.5vw;
                height: 8vh;
                width: 40vw;
            }
        }  
    }
`

export const LinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
span{
    font-size: 2vh;
    &:hover{
        color: #be1010;
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }
}    
`
export const TextError = styled.span`
    font-size: 2.2vh;
    font-weight: 400;
    color: #8c8c8c;
    font-style: italic;
`

export const DefaultPageContainer = styled.div`
    width: 100vw;
    margin: 2vh 21vw 0px 21vw;
    
    @media (max-width: 1024px) {
        margin: 12vh 21vw 5vh 2vw;
    }

    @media (max-width: 768px){
        margin: 12vh 2vw 12vh 2vw;
    }
`