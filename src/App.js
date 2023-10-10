import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CTA from './components/CTA';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Vender from './pages/Vender';
import Comprar from './pages/Comprar';
import Anticreto from './pages/Anticreto';
import Agente from './pages/Agente';
import Renta from './pages/Renta';

const App = () => {
  return (
    <div className='w-screen mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rentar' element={<Renta />} />
        <Route path='/comprar' element={<Comprar />} />
        <Route path='/anticreto' element={<Anticreto />} />
        <Route path='/agente' element={<Agente />} />
        <Route path='/vender' element={<Vender />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <CTA/>
      <Footer />
    </div>
  );
};

export default App;