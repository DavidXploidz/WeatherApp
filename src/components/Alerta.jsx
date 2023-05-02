import React from 'react'

export default function Alerta({mensaje}) {
  return (
    <div className='my-3'>
        <p className='p-2 bg-red-400 border-l-4 border-red-600 text-white font-bold text-sm text-center'>
            {mensaje}
        </p>
    </div>
  )
}
