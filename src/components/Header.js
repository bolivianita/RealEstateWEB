import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo-01.png';
import Aleida from '../assets/img/logo-inmobiliaria.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='px-20 flex justify-between items-center'>
        <div className='flex flex-row justify-center gap-x-4 items-center'>
        <Link to='/'>
          <img src={Aleida} alt='' style={{width:"100px"}}/>
        </Link>
        <Link to='/'>
          <img src={Logo} alt='' style={{width:"60px"}}/>
        </Link>
        </div>
        <div className='flex items-center gap-6'>
          <Link to='/rentar' className='hover:text-cyan-900 transition'>
            Rentar
          </Link>
          <Link to='/comprar' className='hover:text-cyan-900 transition'>
            Comprar
          </Link>
          <Link to='/anticreto' className='hover:text-cyan-900 transition'>
            Anticreto
          </Link>
          <Link to='/agente' className='hover:text-cyan-900 transition'>
            Agente
          </Link>
          <Link
            className='bg-cyan-900 hover:bg-cyan-900 text-white px-4 py-3 rounded-lg transition'
            to='/vender'
          >
            Vender
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;