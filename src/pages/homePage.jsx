import { DefaultPageContainer } from "../styles/formStyle";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";
import PostCard from "../components/homePage/postCard";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import apiModels from "../services/apiModels.js";

export default function HomePage(){
    const [lista, setLista] = useState([]);
    const elementos = lista.map((el)=>(
        <PostCard key={'pokemon'+el.id} infos={el}></PostCard>
    ));
    
    
    useEffect(()=>{
        apiModels.getHomeList().then( (resp)=>{
            //console.log(resp.data);
            setLista(resp.data);
        }
        ).catch( (err)=>{
            console.log(err.response.data);
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