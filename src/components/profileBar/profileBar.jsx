import profile from '../../assets/stranger.jpg';
import { styled } from "styled-components";


export default function ProfileBar(){
    return (
    <SuperContainer>
        <UserCard>
            <UserInfos>
                <img src={profile} />
                <div>
                    <UserName>Visitante Misterioso</UserName>
                    <UserEmail>Faça o login aqui!</UserEmail>
                </div>
            </UserInfos>
        </UserCard>
        <PokemonsContainer>
            <TitleCard>
                <TextoTitulo>Seus Pokemons:</TextoTitulo>
                <TextoAviso>Ver todos</TextoAviso>
            </TitleCard>

            <PokemonCard>
                <FotoPokemon>
                </FotoPokemon>
                <InfosPokemon>
                    <NamePokemon>Lluviax</NamePokemon>
                    <SpeciePokemon>Milotic</SpeciePokemon>
                </InfosPokemon>
                <TextoAviso>Checar</TextoAviso>
            </PokemonCard>

            <PokemonCard>
                <FotoPokemon>
                </FotoPokemon>
                <InfosPokemon>
                    <NamePokemon>Lluviax</NamePokemon>
                    <SpeciePokemon>Milotic</SpeciePokemon>
                </InfosPokemon>
                <TextoAviso>Checar</TextoAviso>
            </PokemonCard>

            <PokemonCard>
                <FotoPokemon>
                </FotoPokemon>
                <InfosPokemon>
                    <NamePokemon>Lluviax</NamePokemon>
                    <SpeciePokemon>Milotic</SpeciePokemon>
                </InfosPokemon>
                <TextoAviso>Checar</TextoAviso>
            </PokemonCard>

        </PokemonsContainer>

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
const UserCard = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px 20px;
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
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
`
const UserName = styled.span`
    font-size: 1.6vw;
    font-weight: bold;
    margin: 2px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`
const UserEmail = styled.span`
    font-size: 0.9vw;
    color: #333;
    margin: 2px;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

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

const PokemonCard = styled.div`
    height: 10vh;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #888;
`

const FotoPokemon = styled.div`
    width: 4vw;
    height: 4vw;
    margin-left: 5px;
    border-radius: 2vw;
    background-image:url('https://i.pinimg.com/1200x/93/b3/5b/93b35bd031f82b8beb9ab19754fd141b.jpg');
    background-size : cover;
    background-position: center center;
    `

const InfosPokemon= styled.div`
    width: min(20vh, 10vw);
    height: min(20vh, 10vw);
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

const NamePokemon = styled.span`
    font-size: 1.2vw;
`

const SpeciePokemon = styled.span`
    font-size: 0.7vw;
    color: #444;
`