
import { styled } from "styled-components";
import { UserContext } from '../../contexts/userContext';
import { useContext } from 'react';
import UserCard from './userCard';
import YoursPokemonContainer from "./YoursPokemonContainer";

export default function ProfileBar(){
    const {user} = useContext(UserContext);

    
    return (
    <SuperContainer>
        
        <UserCard></UserCard>
        <YoursPokemonContainer></YoursPokemonContainer>

    </SuperContainer>
    )
}

const SuperContainer = styled.div`
    background: linear-gradient(to bottom, #dcdcdc, #c0c0c0);
    width: 20vw;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.2);
    border-left: solid 1px darkgray;
    box-sizing: border-box;
    
    position: fixed;
    right: 0px;
    z-index: 100;

    @media (max-width: 1024px) {
        height: 90vh;
        bottom: 0px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`