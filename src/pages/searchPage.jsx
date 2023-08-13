import ScreenWithBars from "../components/screenWithBars/ScreenWithBars.jsx";
import { DefaultPageContainer } from "../styles/formStyle";
import { styled } from "styled-components";
import { useState } from "react";
import apiModels from "../services/apiModels.js";
import PostCard from "../components/homePage/postCard.jsx";

export default function SearchPage(){
    
  const [searchTerm, setSearchTerm] = useState("");
  const [listaPesquisa, setListaPesquisa] = useState([]);
  const[hasSearched, setHasSearched] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const pesquisar = function (){
    console.log('entrou');
    apiModels.getAny(searchTerm)
    .then((resp)=>{
      console.log(resp.data);
      if(!hasSearched) setHasSearched(true);
      setListaPesquisa(resp.data);
    })
    .catch((err)=> console.log(err));
  };



    return (
        <ScreenWithBars>
            <DefaultPageContainer>
              <SearchContainer>
                <SearchBar
                  type="text"
                  placeholder="Procurar..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </SearchContainer>
              <SearchTriggerContainer>
              <SearchButton onClick={pesquisar}>
                Pesquisar
                <ion-icon name="search-circle"></ion-icon>
              </SearchButton>
              </SearchTriggerContainer>
              
              <ResultContainer>
                {listaPesquisa && listaPesquisa.map(el=> <PostCard infos={el} key={"resultadoBusca "+el.id}></PostCard>)}
                {(hasSearched && listaPesquisa.length==0) && < EmptyResult>Não achamos resultados correspondentes...</ EmptyResult>}
              </ResultContainer>
            </DefaultPageContainer>
        </ScreenWithBars>
    )
}
const SearchContainer = styled.div`
  display: flex;
  flex-direction: rows;
  align-items: center;
  font-size: 4.5vh;
  ion-icon{
    &:hover{
      cursor: pointer;
      color: #be1010;
    }
  }

`
const SearchBar = styled.input`
  padding: 10px;
  width: 58vw;
  height:6vh;
  background-color: white;
  border-radius: 5px;
  font-size: 3.2vh;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: 76vw;
  }
  @media (max-width: 768px) {
    width: 94vw;
  }
`;
const SearchButton = styled.button`
  background-color  : #be1010;
  width: 15vw;
  height: 5vh;
  font-size: 3vh;
  font-weight: 400;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 1vh;
  color: #ddd;
  display: flex;
  align-items:center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover{
    cursor: pointer;
    background-color: #960909;
  }
  @media (max-width: 1024px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    padding: 0 1vw 0 1vw;
    width: 60vw;
  }

`

const ResultContainer = styled.div`
  width: 58vw;
  margin-top: 30px;
  border-top: 1px solid #333;
  @media (max-width: 1024px) {
    width: 76vw;
  }
  @media (max-width: 768px) {
    width: 94vw;
  }
`

const SearchTriggerContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EmptyResult = styled.div`
  height: 6vh;
  font-size: 2.5vw;
  color: #777;
  font-weight: 400;
  margin-top: 1vh;
  @media (max-width: 1024px) {
    font-size: 3.5vw;
  }
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`
