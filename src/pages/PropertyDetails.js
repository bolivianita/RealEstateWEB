import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Aleida from '../assets/img/aleida.png';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.name}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-yellow-600 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-cyan-900 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-cyan-900'>
          $ {property.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-cyan-900 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300'>
              <img src={Aleida}></img>
            </div>
            <div>
              <div className='font-bold text-lg'>Aleida Vega</div>
              <Link to='' className='text-cyan-900 text-sm'>
                Agente Inmobiliario
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
              className='border border-gray-300 focus:border-cyan-900 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Nombre*'
            />
            <input
              className='border border-gray-300 focus:border-cyan-900 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Email*'
            />
            <input
              className='border border-gray-300 focus:border-cyan-900 rounded w-full px-4 h-14 text-sm outline-none'
              type='text'
              placeholder='Telefono*'
            />
            <textarea
              className='border border-gray-300 focus:border-cyan-900 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
              type='text'
              placeholder='Message*'
              defaultValue='Hola, estoy interesado'
            />
            <div className='flex gap-x-2'>
              <button
                className='bg-cyan-900 hover:bg-cyan-900 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Enviar mensaje
              </button>
              <button className='border border-cyan-900 text-cyan-900 hover:border-cyan-900 hover:text-cyan-900 rounded p-4 text-sm w-full transition'>
                Llamar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;