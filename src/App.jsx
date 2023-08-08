import { useState } from 'react';
import LoginPage from './pages/loginPage';
import './styles/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage/>
    </>
  )
}

export default App
