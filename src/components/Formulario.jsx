import React, { useState } from 'react'
import useClima from '../hooks/useClima'
import Alerta from './Alerta';

export default function Formulario() {

    const { paises, handleSubmit, error, alerta} = useClima();
    const [ciudad, setCiudad] = useState();
    const [pais, setPais] = useState();

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 mx-auto bg-gradient-to-b from-sky-400 to-indigo-400 p-4 rounded-lg mt-5 shadow-md'>
        <div className='mb-3'>
            <label htmlFor="ciudad" className='mb-5 text-xl text-amber-200 font-bold'>Ciudad:</label>
            <input onChange={(e)=> {setCiudad(e.target.value)}} type="text" id='ciudad' name='ciudad' className='w-full border border-gray-400 p-2 rounded-md' placeholder='Ingresa alguna ciudad, ej. Monterrey'/>    
        </div>   
        <div className='mb-3'>
            <label htmlFor="pais" className='mb-5 text-xl text-amber-200 font-bold'>Pais:</label>
            <select onChange={(e)=> {setPais(e.target.value)}} name="pais" id="pais" className='w-full border border-gray-400 p-2 rounded-md bg-gray-100'>
                <option value="">-- Selecciona algún pais --</option>
                {paises.map((pais, index) => (
                    <option key={index} value={pais.code}>{pais.pais}</option>
                ))}
            </select>
        </div>
        {alerta === 'Ciudad no encontrada' && (
            <Alerta mensaje={alerta} /> 
        )}
        {alerta === 'Todos los campos son obligatorios' && (
            <Alerta mensaje={alerta} /> 
        )}
        <div className='mt-5'>
            <input onClick={() => {handleSubmit(ciudad, pais)}} type="submit" value="Consultar" className='uppercase bg-yellow-200 hover:bg-yellow-300 transition-colors p-2 w-full text-center rounded-md font-bold text-sm text-blue-400 cursor-pointer' />
        </div>
    </div>
  )
}
