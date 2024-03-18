import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

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
          <Route path='/home' element={<Home />} />
        </Routes> 
      </Router>
    </div>
  )
}

export default App
