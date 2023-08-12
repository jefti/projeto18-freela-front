import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import UserPage from './pages/UserPage';
import UserProvider from './contexts/userContext.jsx';

import './styles/style.css';
import SearchPage from './pages/searchPage.jsx';
import ManagePokemonPage from './pages/managePokemonPage.jsx';
import PokemonPage from './pages/searchPage copy';


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
        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
}


