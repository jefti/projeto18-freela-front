import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import UserPage from './pages/UserPage';
import UserProvider from './contexts/userContext.jsx';

import './styles/style.css';


export default function App() {



  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/user' element={<UserPage/>} />
        </Routes>
      </UserProvider>
    </BrowserRouter>

  )
}


