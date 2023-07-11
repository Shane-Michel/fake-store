import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
