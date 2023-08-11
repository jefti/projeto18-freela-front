import { UserContext } from './contexts/userContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import './styles/style.css';
import UserPage from './pages/UserPage';



export default function App() {
  const  [user, setUser] = useState({});


  return (
    <BrowserRouter>
      <UserContext.Provider value={{user,setUser}}>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/user' element={<UserPage/>} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>

  )
}


