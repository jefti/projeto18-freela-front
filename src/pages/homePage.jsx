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
`