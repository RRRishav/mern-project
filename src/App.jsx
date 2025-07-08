import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/contact'
import Login from './components/Login'
import Signup from './components/Signup'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    
      </Routes>
    </Router>
    </>
  )
}

export default App