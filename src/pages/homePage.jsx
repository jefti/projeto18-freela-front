import { DefaultPageContainer } from "../styles/formStyle";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";
import PostCard from "../components/homePage/postCard";
import { styled } from "styled-components";

export default function HomePage(){
    return (
    <ScreenWithBars>
        <DefaultPageContainer>
            <ContentBox>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
                <PostCard></PostCard>
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