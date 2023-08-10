
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
    border-left: solid 1px darkgray;
    width: 20vw;
    box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1024px) {
        height: 90vh;
    }
    @media (max-width: 768px) {
        display: none;
    }
`