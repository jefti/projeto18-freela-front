import { styled } from "styled-components"

export const SuperForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            height: 6vh;
            width: 25vw;
            min-width: 400px;
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
            height: 6vh;
            width: 40vh;
            background-color: #e21414; 
            font-size: 3vh;
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