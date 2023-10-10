import React from 'react'
import { Link } from 'react-router-dom';
import Aleida from '../assets/img/aleida.png';

function Vender() {
  return (
    <div>
      <div className='flex flex-row justify-center px-20 pt-10 pb-16'>
      <div className='w-1/2 flex flex-col gap-y-8'>
        <h1 className="text-4xl lg:text-[58px] font-semibold leading-none text-cyan-900" style={{ fontSize: '60px' }}>¿Quieres Vender?</h1>
        <p className='w-3/4 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nisl tincidunt mi porta venenatis sed et leo. Donec aliquet ultricies enim. Vestibulum elit nibh, interdum nec lacinia quis, auctor quis orci. Praesent tincidunt convallis ultrices. Cras a venenatis nisi, quis maximus nulla. Sed a maximus dui. Sed sit amet viverra orci. Donec consectetur scelerisque est nec congue.</p>
        <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 '>
              <img src={Aleida}></img>
            </div>
            <div>
              <div className='font-bold text-lg'>Aleida Vega</div>
              <Link to='' className='text-cyan-900 text-sm'>
                Agente Inmobiliario
              </Link>
            </div>
          </div>
      </div>
      <div className='w-1/2 flex-1 mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
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
  )
}

export default Vender