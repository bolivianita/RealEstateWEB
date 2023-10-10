import React from 'react'
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className='flex flex-row justify-center items-center text-center mb-10'>
            <div className="flex flex-row justify-center w-screen rounded-3xl py-4 bg-cyan-900 pb-20" style={{ width: '90vw' }}>
              <div className="flex flex-col pt-20 gap-y-4">
                <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6 text-white'>Tu hogar, tu sueño, <br /> mi pasion</h1>
                <p className='text-white'>Un servicio completo para la venta, compra o alquiler de bienes raíces.</p>
                <div className="flex flex-row justify-center items-center gap-x-4">
                  <Link to="/vender" className="py-2 px-4 rounded-xl bg-yellow-600">
                    <p className="button text-white" style={{ color: 'white', fontSize: '16px', letterSpacing: '3.2px' }}>CONTACTO</p>
                  </Link>
                </div>
              </div>
            </div>
    </div>
  )
}

export default CTA