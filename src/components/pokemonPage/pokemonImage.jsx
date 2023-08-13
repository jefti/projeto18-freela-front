import { useState } from "react";
import { styled } from "styled-components"

export default function PokemonImage({infos}){
    const[showDetail, setShowDetail] = useState(false);

    const {foto,fotoUsuario}=infos;

    let obj = {DDD:infos.telefone.slice(0,2),codigo:infos.telefone.slice(2,7),registro:infos.telefone.slice(7)};
    console.log(infos);
    return (
        <Teste>
            <TraineBox>
                <img src={fotoUsuario} ></img>
                <span>{infos.responsavel}</span>
                <p>({infos.email})</p>
            </TraineBox>
            <BlurredImagem  
                src={foto} 
                efeito={showDetail}
                onClick={()=> setShowDetail(!showDetail)}    
            ></BlurredImagem >
            <NomeBox>Nome :
                <p>{infos.nome}<span>({infos.especie})</span></p>
            </NomeBox>
            <DetailBox 
                efeito={showDetail}
                onClick={()=> setShowDetail(!showDetail)}  
            >
                {infos.descricao}
            </DetailBox>
            <InfosContainer>
                {!(infos.avaliable) && <InfoBox cor="#be1010">Indisponível</InfoBox>}
                
                {(infos.avaliable) && (
                    <ContactBox>
                        R${(infos.diaria/100).toFixed(2).toString().replace('.',',')}
                        <span>por dia</span>
                    </ContactBox>
                )}
                {(infos.avaliable) && (
                    <ContactBox>
                            <ion-icon name="call"></ion-icon>
                        ({obj.DDD}) {obj.codigo}-{obj.registro}

    
    
                    </ContactBox>
                )}   
            

            </InfosContainer>

        </Teste>
    )
}

const BlurredImagem = styled.img`
    filter: ${({ efeito}) => (!(efeito)?'none': 'blur(5px)')};
    transition: filter 0.3s ease-in-out;
`


const Teste = styled.div`
    background-color: white;
    width: 58vw;
    height: 96vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: min(2vw, 2vh);
    overflow: hidden;
    position: relative;
    
    img{
        height: 70vh;
        width: 54vw;
        object-fit: cover;
        margin: min(1vw,2vh);
        box-sizing: border-box;
        border-radius: min(2vw, 2vh);
    }
    @media (max-width: 1024px) {
        width: 76vw;
        height: 84vh;
        img{
            width: 74vw;
            height: 70vh; 
        }
    }
    @media (max-width: 768px){
        width: 96vw;
        height: 74vh;
        img{
            width: 94vw;
            height: 60vh; 
        }
    }
`
const NomeBox = styled.div`
    background-color: #ddd;

    width: 22vw;
    height:auto;

    border-radius: min(2vw, 3vh) 0 0 min(2vw, 3vh);
    border: 1px solid #ccc;
    padding: min(2vw, 2vh);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-sizing: border-box;

    position: absolute;
    right: 0vw;
    bottom: 30vh;
    
    z-index: 3;

    p{
        color: #be1010;
        font-size: min(3.3vw,6vh);
        font-weight: 800;
        margin-left: 2vw;
        span{
            color: #444;
            font-size: min(1.5vw,2.5vh); 
        }
    }
    @media (max-width: 1024px) {

        width: 32vw;
        bottom: 20vh;
        p{
            font-size: min(5vw,6vh);
            span{
                font-size: min(2.5vw,2.5vh);    
            }
        }

    }
`

const TraineBox = styled.div`
    width: 94%;
    height: 10vh;
    /* background-color: yellow; */
    position: relative;

    margin-top: min(1vw,1vh);
    border-bottom: 2px solid #444;

    display: flex;
    align-items: flex-end;
    img{
        width:20vw;
        height: 15vh;
        object-fit: cover;
        object-position: center;

        position: absolute;
        left: 1px;
        top: 1px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        z-index: 3;
    }
    span{
        margin-left: 22vw;
        font-size: min(5vh,6vw);
        font-weight: 800;
    }

    p{
        color: #555;
        font-weight: 300;
        font-size: min(2.5vh,1.2vw);
        margin-bottom: 0.5vh;
        margin-left: 0.3vw;
    }

    @media (max-width: 1024px) {
        height: 6vh;
        img{
            height: 10vh;
            width: 26vw;
            
        }
        span{
            font-size: min(4vh,4vw);
            margin-left: 28vw;
        }
    }
    @media (max-width: 1024px) {
        p{
            font-size: min(2.5vh,2.5vw);
        }
    }
`

const DetailBox = styled.div`
        height: 70vh;
        width: 54vw;
        background-color: ${({ efeito}) => (!(efeito)?'rgba(1,1,1,0)': 'rgba(0, 0, 0, 0.7)')};; 
        transition: background-color 0.3s linear; 
        
        position: absolute;
        top: 13vh;
        border-radius: min(2vw, 2vh);
        box-sizing: border-box;
        z-index: 2;
        display: ${({ efeito}) => (!(efeito)?'none': 'inline')};

        padding: 9vh 1vw 0 1vw;
        text-align: justify;
        color: #aaa;
        font-size: min(4vh,4vw);

    @media (max-width: 1024px) {    
        width: 74vw;
        height: 70vh;
        top: 6vh;
    }
    @media (max-width: 768px){
        top: 7vh;
        width: 94vw;
        height: 60vh;
    }
`
const InfosContainer = styled.div`
    display: flex;

`
const InfoBox = styled.div`
    height: 9vh;
    border-radius: min(1vh,1vw);
    color: ${({cor})=> cor||"transparent"};
    font-size: 1.7vw;
    font-weight: 1000;
    display: flex;
    align-items: center;
    padding: 0.5vh 1vw 0.5vh 1vw;
    border: ${({cor})=> cor||"transparent"} solid 1.5vh;
    border-radius: 5px;
    margin-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {    
        width: 35vw;
        height: auto;
        font-size: 3.5vw;
        span{
            font-size:2vw; 
        }
    }    

    @media (max-width: 768px) {
        width: 45vw;
        height: auto;
    }   
`

const ContactBox = styled.div`
    background-color: #be1010;
    color: #ddd;
    height: 9vh;
    width: 25vw;
    font-weight: 500;
    border-radius: min(2vw,2vh);
    padding:  min(2vw,2vh);
    box-sizing: border-box;
    margin: 0  1vw 0 1vw;   
    font-size: 1.7vw;
    /* font-size: min(3.2vh,3vw); */
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size:1vw;
        margin-left: 0.4vw;
        margin-top: 0.7vh;
    }
    ion-icon{
        font-size: 2.6vw;
        margin-right: 0.4vw;        
    }

    @media (max-width: 1024px) {    
        width: 35vw;
        height: auto;
        font-size: 3.5vw;
        span{
            font-size:2vw; 
        }
    }    

    @media (max-width: 768px) {
        width: 45vw;
        height: auto;
    }   
`