import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function PokemonCardComponent({nome,especie,id,foto}){
    const nav = useNavigate();

    return (
        <PokemonCard onClick={()=> nav(`/pokemon/${id}`)}>
            <FotoPokemon foto={foto}> </FotoPokemon>
            <InfosPokemon>
                <NamePokemon>{nome}</NamePokemon>
                <SpeciePokemon>{especie}</SpeciePokemon>
            </InfosPokemon>
            <TextoAviso>Acessar</TextoAviso>
        </PokemonCard>
    );
}

const PokemonCard = styled.div`
    height: 10vh;
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1vw 0 1vw;
    border-bottom: 1px solid #888;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.5s ease-in-out;
    &:hover{
        cursor: pointer;
        background-color: #ccc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        border-radius: 0.3vw;
        color: #be1010;
    }
`

const FotoPokemon = styled.div`
    width: 4vw;
    height: 4vw;
    margin-right: 0.5vw;
    border-radius: 0.5vw;
    background-image:url(${props => props.foto});
    background-size : cover;
    background-position: center center;
`

const InfosPokemon= styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    justify-content: center;
`

const NamePokemon = styled.span`
    font-size: 1.6vw;
    font-weight: bold;
`

const SpeciePokemon = styled.span`
    font-size: 0.7vw;
    color: #444;
`

const TextoAviso = styled.span`
    font-size: 0.9vw;
    color: #333;
    margin-left: 3vw;
`