import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/result' element={<Results/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
