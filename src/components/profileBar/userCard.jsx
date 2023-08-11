import { styled } from "styled-components";
import { useContext } from 'react';

import { UserContext } from '../../contexts/userContext';
import profile from '../../assets/stranger.jpg';
import { useNavigate } from "react-router-dom";

export default function UserCard(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    function handleNavigate(){
        nav('/user');
    }

    return (
        <UserCardBox onClick={handleNavigate}>
            <UserInfos>
                <ImageContainer>
                    <img src={user.foto? user.foto:profile} />
                </ImageContainer>

                <div>
                    <UserName> {user.nome?user.nome:"Visitante"}</UserName>
                    <UserEmail>{user.email?user.email:"Fazer o login..."}</UserEmail>
                </div>
            </UserInfos>
        </UserCardBox>
    );
}


const UserCardBox = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px 20px;
`
const ImageContainer = styled.div`
    width: 15vw;
    height: 15vw;
    border-radius: 5px;
    overflow: hidden;
`
const UserInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 15vw;
        height: 15vw;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 2s, filter 0.3s;
    }
    div{
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    &:hover{
        cursor: pointer;
        border: 1px dashed #bbb;
        box-sizing: border-box; 

        img{
            transform: scale(1.25);
        }
        div{
            span{
                color: #be1010;
                border: none;
            }
        }
    }
`
const UserName = styled.span`
    font-size: 3vw;
    font-weight: bold;
    margin: 2px;
`
const UserEmail = styled.span`
    font-size: 1.5vw;
    color: #333;
    margin: 2px;
    border-top: 1px solid black;
`
