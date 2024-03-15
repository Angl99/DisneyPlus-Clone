import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Login from './components/Login'

function App() {

  return (
    <div className='App'>
      <Router>
        <nav>
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
