import { styled } from "styled-components"

export const SuperForm = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        input{
            height: 50px;
            width: 25vw;
            background-color: #FCFCFC;
            min-width: 400px;
            margin: 5px;
        }
        button{
            margin-top: 25px;
            margin-bottom: 30px;
            border: none;
            border-radius: 10px;
            width: 300px;
            background-color: #e21414; 
            font-size: 28px;
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
    font-size: 18px;
    &:hover{
        color: #be1010;
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }
}
`