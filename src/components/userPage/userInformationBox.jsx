import { styled } from "styled-components";
export default function UserInformationBox({categoria,informacao}){
    let obj = {DDD:'',codigo:'',registro:''};
    if(informacao){
        obj.DDD = informacao.slice(0,2);
        obj.codigo = informacao.slice(2,7);
        obj.registro = informacao.slice(7);
    }
    
    return (
        <InfoUserBox>
            <InfoUserCategoria>{categoria}:</InfoUserCategoria>
            {categoria === "Telefone"?
            <InfoUserInformation>({obj.DDD}) {obj.codigo}-{obj.registro}</InfoUserInformation>
            : 
            <InfoUserInformation>{informacao}</InfoUserInformation>}
        </InfoUserBox>
    )
}

const InfoUserBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 5vh;
    margin: 0.5vh 1vw;
    @media (max-width: 768px) {
        height: min(10vh,10vw);
    }
`

const InfoUserCategoria = styled.div`
    font-size: 1.5vw;
    color: #333;
    font-weight: 200;
    @media (max-width: 1024px) {
        font-size: 2.2vw;   
    }
    @media (max-width: 768px) {
        font-size: 4vw;   
    }
    
`

const InfoUserInformation = styled.div`
    font-size: 1.8vw;
    font-weight: bold;
    @media (max-width: 1024px) {
        font-size: 2.5vw;   
    }
    @media (max-width: 768px) {
        font-size: 5vw;   
    }
`