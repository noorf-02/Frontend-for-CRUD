import React from 'react'
import NavComp from './Components/Shared/NavComp'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import ProductsPage from './Pages/ProductsPage'

function App() {
  return (
    <BrowserRouter>
      <NavComp/>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/products' element={<ProductsPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
