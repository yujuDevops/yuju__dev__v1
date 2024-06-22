import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import HomePage from './pages/homepage/HomePage';


function App() {

  return (
    <>
     <Navbar></Navbar>
     <HomePage pageId="home"/>
    </>
  )
}

export default App
