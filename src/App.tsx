import React from 'react';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

function App() {
  return (
   <BrowserRouter>
   <img src='./zevi.png' alt='zevi' className='zeviLogo'/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/result' element={<Results/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
