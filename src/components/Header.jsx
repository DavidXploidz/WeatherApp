import React from 'react'

export default function Header() {
  return (
    <header className='bg-gradient-to-b from-sky-400 to-indigo-400 w-full md:w-1/2 lg:w-1/3 mx-auto rounded-lg p-5 flex items-center justify-between mt-10 shadow-md'>
      <div><i className='bx bx-cloud-lightning text-5xl text-white'></i></div>
      <nav>
          <ul>
              <li className='text-3xl text-white font-bold'>Weather App</li>
          </ul>
      </nav>
    </header>
  )
}
