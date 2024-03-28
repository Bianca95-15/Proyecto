import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Home, ProductDetails } from '../pages'
import Error404 from '../components/Error404'



export const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/detail/:pid' element={<ProductDetails/>}/>
            <Route path='*' element={<Error404 mensaje={'La ruta buscada no existe'} />}/>
        </Routes>
    </>
  )
}

export default PageRouter
