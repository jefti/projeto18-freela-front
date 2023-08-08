import { styled } from "styled-components";
import NavBar from "../navBar/navBar";
import ProfileBar from "../profileBar/profileBar";

export default function ScreenWithBars({children}){
    return (
        <PageContainer>
            <NavBar></NavBar>
            {children}
            <ProfileBar></ProfileBar>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: #D8D8D8;
    display: flex;
    flex-direction: rows;
`

