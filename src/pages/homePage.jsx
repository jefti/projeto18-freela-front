import { styled } from "styled-components";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";
import PostCard from "../components/homePage/postCard";

export default function HomePage(){
    return (
    <ScreenWithBars>
        <SuperContainer>

            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
        </SuperContainer>
    </ScreenWithBars>
    );
}


const SuperContainer = styled.div`
    width: 100vw;
    margin: 2vh 21vw 0px 21vw;

    @media (max-width: 1024px) {
        margin: 12vh 21vw 5vh 2vw;
    }

    @media (max-width: 768px){
        margin: 12vh 2vw 12vh 2vw;
    }
`