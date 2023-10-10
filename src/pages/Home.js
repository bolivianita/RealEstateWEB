import React from 'react';
import Search from '../components/Search';
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
import Casa1 from '../assets/img/casa1.png';
import Casa2 from '../assets/img/casa2.png';
import Casa3 from '../assets/img/casa3.png';
import Casa4 from '../assets/img/casa4.png';


const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <div className="text-center -mt-10 mb-8 text-4xl lg:text-[58px] font-semibold leading-none">
        {/* <h1 style={{ fontSize: '30px' }}>Tenemos Lo Que Estas Buscando</h1> */}
      </div>
        <div className="flex flex-row justify-center items-center gap-x-10 mb-20 w-screen px-12">
          <img
            className="transition-transform transform hover:-translate-y-6 w-1/4"
            style={{height: '40vh', objectFit:"cover",  borderRadius: '10px'}}
            src={Casa1} 
            alt="Casa 1"
          />
          <img
            className="transition-transform transform hover:-translate-y-6 w-1/4"
            style={{height: '40vh', objectFit:"cover",  borderRadius: '10px'}}
            src={Casa2} 
            alt="Casa 2"
          />
          <img
            className="transition-transform transform hover:-translate-y-6 w-1/4"
            style={{height: '40vh', objectFit:"cover",  borderRadius: '10px'}}
            src={Casa3} 
            alt="Casa 3"
          />
          <img
            className="transition-transform transform hover:-translate-y-6 w-1/4"
            style={{height: '40vh', objectFit:"cover",  borderRadius: '10px'}}
            src={Casa4} 
            alt="Casa 4"
          />
        </div>
      <Search />
      <HouseList />
    </div>
  );
};

export default Home;