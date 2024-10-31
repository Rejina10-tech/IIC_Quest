import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'


import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import bgImage from './assets/bg.png';
import Contact from './pages/Contact/Contact'
import LoginForm from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
          
    </div> 
    
  )
}

export default App
