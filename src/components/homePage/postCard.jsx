import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
export default function PostCard({infos}){
    const nav = useNavigate();
    
    const {nome, especie, descricao, diaria,foto,id, user}=infos;
    let preco = "R$ "+(diaria/100).toFixed(2).toString().replace('.',',');
    let obj = {DDD:user.phone.slice(0,2),codigo:user.phone.slice(2,7),registro:user.phone.slice(7)};

    
    return(
        <PostBody onClick={()=>nav(`/pokemon/${id}`)}>
            <div className="ContentBox">
                <div className="responsavel">#{user.nome}</div>
                <div className="pokemon">{nome} <span>{especie}</span></div>
                <div className="descricao">{descricao}</div> 
                <div className="diaria"><span>Diária:</span> {preco}</div>
                <div className="contato"><span>Contato:</span> ({obj.DDD}) {obj.codigo}-{obj.registro} </div>  
           </div>

            <ImgBox className="ImgBox">
                <img src={foto} alt="foto"/>
            </ImgBox>

        </PostBody>
    );
}

const PostBody = styled.div`
    width: 57vw;
    height: 30vh;

    margin-bottom: 1vh;
    border-radius: 2vh;


    background: linear-gradient(to bottom, #ffffff, #f5f5f5);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;

    .ContentBox{
        height: 25vh;
        width: 20vw;
        border-radius: 2vh;

        padding: 2vh;
        box-sizing: border-box;
        position: absolute;
        top: 3vh;
        right: 2vw;
        z-index: 10;
        
        background: linear-gradient(to bottom, #ffffff, #f5f5f5);
        transition: box-shadow 500ms linear;
        display: flex;
        flex-direction: column;
        
        div{
            height: 5vh;
        }
        .responsavel{
            height: 2vh;
            margin-bottom: 0px;
            color: #444;
            font-size: 2vh;
            overflow: hidden;
        }
        .pokemon{
            color: #be1010;
            font-size: min(7vw,4vh);
            margin-bottom: min(1vh, 1vw);
            font-weight: bold;
            border-bottom: 1px solid #bbb;
            overflow: hidden;
            span{
                color: #444;
                font-size: 2vh;
                font-style: italic;
            }
        }
        .descricao{
            font-size: min(0.8vw , 2vh);
            margin-bottom: 1vh;
            max-height: 6.5vh;

            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        .diaria{
            font-size: min(1.2vw,2.3vh);
            height: 2vh;
            margin-bottom: 0px;
            span{
                font-weight: bold;
            }
        }
        .contato{
            font-size: min(1.2vw,2.3vh);
            height: 2vh;
            margin-bottom: none;
            span{
                font-weight: bold;
            }
        }
    }

    &:hover{
        cursor: pointer;
        .ImgBox{
            width: 56vw;
        }
        .ContentBox{
            text-decoration: underline;
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
    }
    
    @media (max-width: 1024px) {
        width:75vw;
        .ImgBox{
            width: 40vw;
        }
        .ContentBox{
            width: 30vw;
            .descricao{
                display: none;
            }
            .diaria{
                display: flex;
                flex-direction: column;
                font-size: min(2.2vw,2.2vh);
                margin-bottom: min(1vw,1vh);
                align-items: center;
                height: 4vh;
   
            }
            .contato{
                font-size: min(2.2vw,2.2vh);
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 4vh;
                margin-top: 1vh;
            }
        }

        &:hover{
            .ImgBox{
                width: 73vw;
            }
        }

    }

    @media (max-width: 768px){
        width: 95vw;
        .ImgBox{
            width: 50vw;
        }
        .ContentBox{
            width: 40vw;
            .pokemon{
                span{
                    display: none;
                }
            }
            .diaria{
                font-size: min(4vw,2.2vh);
            }
            .contato{
                font-size: min(4vw,2.2vh);
            }
        }
        &:hover{
            .ImgBox{
                width: 93vw;
            }
        }
    }

`
    const ImgBox = styled.div`
        height: 28vh;
        width: 30vw;


        position: absolute;
        top: min(1vw,1vh);
        left: min(1vw,1vh);

        transition: width 1s ease-in;
    img{
        width: 100%;
        height: 100%;
        transition: width 1s ease-in;
        object-fit: cover;
        object-position: center;
        border-radius: 2vh;
    }
`