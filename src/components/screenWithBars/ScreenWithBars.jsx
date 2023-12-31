import { styled } from "styled-components";
import NavBar from "../navBar/navBar";
import ProfileBar from "../profileBar/profileBar";
import FooterNav from "../navBar/footer";

export default function ScreenWithBars({children}){
    return (
        <PageContainer>
            <NavBar></NavBar>
            
            <TabletContent>
                {children}
                <ProfileBar></ProfileBar>
            </TabletContent>
            <FooterNav></FooterNav>
            
        </PageContainer>
    )
}

const PageContainer = styled.div`
    min-height: 100vh;
    width: 99vw;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #D8D8D8;
    display: flex;
    flex-direction: rows;
    position: relative;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`

const TabletContent = styled.div`
    display: flex;
    flex-direction: rows;
    width: 80vw;
    min-height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 1024px) {
        width: 100vw;
        min-height: 80vh;
    }
`