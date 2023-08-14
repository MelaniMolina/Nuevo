import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CasaProvider } from './components/context/CasaProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <CasaProvider>
    <App />
    </CasaProvider>
  </React.StrictMode>,
    document.getElementById('root')
)
