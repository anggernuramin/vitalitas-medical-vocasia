import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import AllReview  from './review/AllReview'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/pelayanan' element={<AllReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
