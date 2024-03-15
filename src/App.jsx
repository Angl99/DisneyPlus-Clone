import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'

function App() {

  return (
    <div className='App'>
      <Router>
        <nav>
          <Header />
          <Link to='/'> </Link>
        </nav>

        <Routes>
          <Route path='/' element={<Login />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App
