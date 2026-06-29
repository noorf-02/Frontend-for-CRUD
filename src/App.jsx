import React from 'react'
import NavComp from './Components/Shared/NavComp'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <NavComp/>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
