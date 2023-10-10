import React from 'react'
import Search from '../components/Search';
import HouseList from '../components/HouseList';

function Renta() {
  return (
    <div>
      <div className='flex flex-row px-20 pb-10 justify-center items-center'>
        <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-cyan-900" style={{ fontSize: '40px' }}>Rentar</h1>
      </div>
      <Search />
      <HouseList />
    </div>
  )
}

export default Renta