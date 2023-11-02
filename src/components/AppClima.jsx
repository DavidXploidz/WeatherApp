import React from 'react'
import Formulario from './Formulario';
import Header from './Header';
import Resumen from './Resumen';
import useClima from '../hooks/useClima';
import Spinner from './Spinner';

export default function AppClima() {

  const { spinner, mostrarClima} = useClima();

  return (
    <main className='container:lg mx-auto px-4 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen grid place-items-center'>
      <Header />
      <Formulario />

      <div className='relative w-full md:w-1/2 lg:w-1/3 mx-auto bg-transparent mt-5'>
        {spinner ? (
          <Spinner />
        ): mostrarClima ?(
          <Resumen />
        ) : ''}
      </div>
     
      
    </main>
  )
}
