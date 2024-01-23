import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';

const DashBoard = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default function App() {
  return (
    <div className='app'>
      <DashBoard />
    </div>
  )
}
