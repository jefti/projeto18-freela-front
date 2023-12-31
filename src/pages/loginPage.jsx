import SampleImage from '../assets/Sample.jpg';
import LogoContainer from '../components/loginPage/logoContainer';
import LoginForm from '../components/loginPage/loginForm';
import RegisterForm from '../components/loginPage/registerForm';
import { styled } from "styled-components";
import { useState } from 'react';


export default function LoginPage(){
    const [login, setLogin] = useState(true);
    
    const changeForm = function(){
        if(login) setLogin(false);
        else setLogin(true);
    }

    return (
    <BackContainer>
            <WallpaperContainer>
                <WhiteContainer>
                    <LogoContainer></LogoContainer>
                        {login
                            ?<LoginForm changeForm={changeForm}></LoginForm>
                            :<RegisterForm changeForm={changeForm}></RegisterForm>
                        }
                </WhiteContainer>
            </WallpaperContainer>

            <RedContainer></RedContainer>
    </  BackContainer>)
};

const BackContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
    
    @media (max-width: 1024px) {
        height: 100vh;
        width: 100vw;
        background-position: center center;
    }
`
const RedContainer = styled.div`
    background-color: 	#be1010;
    display: inline;
    height: 100vh;
    width: 25vw; 
    @media (max-width: 1024px) {
        display: none;
    }
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
    justify-content: space-evenly;

    @media (max-width: 1024px) {
        position: static;   
        width: 80vw;
    }
    @media (max-width: 768px) {
        width: 94vw;
        height: 90vh;
        min-width: initial;
    }
`

