import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlacedOrder from './pages/PlacedOrder/PlacedOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/order' element={<PlacedOrder/>}/>
       <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </div>
  )
}

export default App
