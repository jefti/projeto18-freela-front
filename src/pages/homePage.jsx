import { DefaultPageContainer } from "../styles/formStyle";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";
import PostCard from "../components/homePage/postCard";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import apiModels from "../services/apiModels.js";

export default function HomePage(){
    const [lista, setLista] = useState([]);
    const elementos = lista.map((el,index)=>(
        <PostCard key={'postcard'+index} infos={el} foto={el.foto}/>
    ));
    
    
    useEffect(()=>{
        apiModels.getHomeList().then( (resp)=>{
            setLista(resp.data);
        }
        ).catch( (err)=>{
            console.log(err);
        }
        );
    },[])
    
    
    return (
    <ScreenWithBars>
        <DefaultPageContainer>
            <ContentBox>
                {elementos}
            </ContentBox>

        </DefaultPageContainer>
    </ScreenWithBars>
    );
}
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`