import SampleImage from '../assets/Sample.jpg';
import { styled } from "styled-components";

export default function LoginPage(){
    return (
    <   BackContainer>
            <WallpaperContainer>
                <WhiteContainer>
                    PokeModels
                    <form>
                        <input type="email" name="" id="" />
                        <input type="password" name="" id="" />
                        <button>Login</button>
                    </form>
                    cadastrar!
                </WhiteContainer>
            </WallpaperContainer>

            <RedContainer>

            </RedContainer>
    </  BackContainer>)
};

const BackContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const WallpaperContainer = styled.div`
    background-image: url(${SampleImage});
    background-size: cover;
    filter: brightness(0.9);
    height: 100vh;
    width: 75vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RedContainer = styled.div`
    background-color: 	#be1010;
    height: 100vh;
    width: 25vw;
`

const WhiteContainer = styled.div`
    background-color: #FFF;
    width: 35vw;
    min-width: 450px;
    height: 85vh;
    position: absolute;
    right: -27%;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`