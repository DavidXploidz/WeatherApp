import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ClimaProvider } from './context/ClimaProvider.jsx'
import AppClima from './components/AppClima.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClimaProvider>
      <AppClima />
    </ClimaProvider>
  </React.StrictMode>,
)
