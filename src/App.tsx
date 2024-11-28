import './index.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/public/home"
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home/>} />
        {/* <Route path='/' element= {<Home/>} /> */}
        
      </Routes>
    </Router>

    
  )
}

export default App
