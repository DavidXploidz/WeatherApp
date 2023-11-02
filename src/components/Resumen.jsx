import React, { useState } from 'react'
import useClima from '../hooks/useClima'
import convertirTemperatura from '../helpers/convertirGrados'
import estadoClima from '../helpers/estadoClima';
import traduccionClima from '../helpers/traduccionClima';
import obtenerSol from '../helpers/obtenerSol';

export default function Resumen() {

    const { data, ciudad } = useClima();
    const tempActual = data.main.temp;
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;
    const pais = data.sys.country;
    const condicion = data.weather[0].main;
    const puestaSol = data.sys.sunset;
    const salidaSol = data.sys.sunrise;

  return (
    <div className='p-4 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-lg shadow-md'>
      <h3 className='text-center text-5xl text-white font-black'>{convertirTemperatura(tempActual)}&deg;C</h3>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-3xl font-bold text-white capitalize'>{ciudad}<span className='ml-1 text-xs'>{pais}</span></p>
          <div className='flex items-center gap-3'>
            <i className={`${estadoClima(condicion)} text-4xl text-white`}></i>
            <p className='text-lg font-bold text-white capitalize'>{traduccionClima(condicion)}</p>
          </div>
        </div>
        <div>
          <p className='text-base font-bold text-white'>
            Max:
            <span className='font-normal ml-1'>
              {convertirTemperatura(tempMax)}&deg;C
            </span>
          </p>
          <p className='text-base font-bold text-white'>
            Min:
            <span className='font-normal ml-1'>
              {convertirTemperatura(tempMin)}&deg;C
            </span>
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-white flex items-center'><i class='bx bx-sun text-2xl'></i><span className='ml-1'>{obtenerSol(salidaSol)}</span></p>
        <p className='text-sm text-white flex items-center'><i class='bx bx-moon text-2xl' ></i><span className='ml-1'>{obtenerSol(puestaSol)}</span></p>
      </div>
    </div>
  )
}
