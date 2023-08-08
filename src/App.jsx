
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import './styles/style.css';
import HomePage from './pages/homePage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

  )
}


