import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/house-banner.png';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            Donde encontraras la 
            <span className='text-cyan-900'> propiedad perfecta.</span> 
          </h1>
          <div className='flex flex-row gap-x-2'>
            <Link to='/rentar' className='bg-cyan-700 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg transition'>
              Rentar
            </Link>
            <Link to='/comprar' className='bg-cyan-700 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg transition'>
              Comprar
            </Link>
            <Link to='/anticreto' className='bg-cyan-700 hover:bg-yellow-600 text-white px-4 py-3 rounded-lg transition'>
              Anticreto
            </Link>
          </div>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Banner;