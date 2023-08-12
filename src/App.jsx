import { BrowserRouter, Routes, Route, redirect } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import UserPage from './pages/UserPage';
import UserProvider from './contexts/userContext.jsx';

import './styles/style.css';

import SearchPage from './pages/searchPage.jsx';
import ManagePokemonPage from './pages/managePokemonPage.jsx';
import PokemonPage from './pages/pokemonPage.jsx';
import RegisterPokemonPage from './pages/registerPokemon.jsx';
import ErroPage from './pages/erroPage.jsx';


export default function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/user' element={<UserPage/>} />
          
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/my' element={<ManagePokemonPage/>} />
          <Route path='/pokemon/:id' element={<PokemonPage/>} />
          <Route path='/register' element={<RegisterPokemonPage/>} />
          <Route path='*' element={<ErroPage/>}/>

        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
}


