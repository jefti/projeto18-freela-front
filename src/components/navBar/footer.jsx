import { styled } from "styled-components";

export default function FooterNav(){
    return (
        <FooterBar>
                <MenuOptions>
                    <li>
                        <ion-icon name="home"></ion-icon>
                    </li>
                    <li>
                        <ion-icon name="search"></ion-icon>
                    </li>
                    <li>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </li>
                </MenuOptions>
        </FooterBar>
    );
}

const FooterBar = styled.div`
    background-color:#dcdcdc;       
    display: none;
    position: absolute;
    z-index: 2;
    bottom: 0px;
    width:100vw;
    height: 10vh;
    @media (max-width:768px) {
        display: inline;
        box-sizing: border-box;
        border-top: 1px solid darkgray;
        box-shadow: 0px -4px 6px -2px rgba(0, 0, 0, 0.2);
    }
`
const MenuOptions = styled.ul`
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-size: 8vw;
`

