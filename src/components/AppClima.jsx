import React from 'react'
import Formulario from './Formulario';
import Header from './Header';
import Resumen from './Resumen';
import useClima from '../hooks/useClima';
import Spinner from './Spinner';

export default function AppClima() {

  const { spinner, mostrarClima} = useClima();

  return (
    <main className='container px-4 mx-auto'>
      <Header />
      <Formulario />

      <div className='relative'>
        {spinner ? (
          <Spinner />
        ): mostrarClima ?(
          <Resumen />
        ) : ''}
      </div>
     
      
    </main>
  )
}
