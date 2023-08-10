import { styled } from "styled-components";
import PokemonCardComponent from "./PokemonCardComponent";

export default function YoursPokemonContainer(){
    return(
        <PokemonsContainer>
            <TitleCard>
                <TextoTitulo>Seus Pokemons:</TextoTitulo>
                <TextoAviso>Ver todos</TextoAviso>
            </TitleCard>
            <PokemonCardComponent></PokemonCardComponent>
            <PokemonCardComponent></PokemonCardComponent>
            <PokemonCardComponent></PokemonCardComponent>

        </PokemonsContainer>
    );
}

const PokemonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TitleCard = styled.div`
    width: 18vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;


`
const TextoTitulo = styled.span`
    font-size: 1.6vw;
    font-weight: 400;
`
const TextoAviso = styled.span`
    font-size: 0.9vw;
    color: #333;

    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

