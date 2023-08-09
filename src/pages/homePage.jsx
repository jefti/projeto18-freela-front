import { styled } from "styled-components";
import ScreenWithBars from "../components/screenWithBars/ScreenWithBars";

export default function HomePage(){
    return (
    <ScreenWithBars>
        <SuperContainer></SuperContainer>
    </ScreenWithBars>
    );
}


const SuperContainer = styled.div`
    width: 60vw;
    @media (max-width: 1024px) {
        width: 80vw;
        height: 90vh;
    }

    @media (max-width: 768px){
        width: 100vw;
        height:85vh ;
    }
`