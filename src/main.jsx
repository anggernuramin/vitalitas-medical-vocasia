import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { EfisienWaktu, Fasilitas, Harga, KebersihanFasilitas, PelDokterStaf } from './review'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/pelayanan' element={<PelDokterStaf />} />
          <Route path='/kebersihan' element={<KebersihanFasilitas />} />
          <Route path='/efisiensi' element={<EfisienWaktu />} />
          <Route path='/harga' element={<Harga />} />
          <Route path='/kelengkapan' element={<Fasilitas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
