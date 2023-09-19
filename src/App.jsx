import React from 'react'
import PageRouter from './router/PageRouter'
import  Header  from './components/Header'
import { useGlobalContext } from './context/GlobalContextProvider'
import { products } from './pages/ProductsDescription'
import { ProductDetails } from './pages'
import FilterContextProvider from './context/FilterContextProvider'


function App() {
const {} = useGlobalContext()

  return (
    <>
    <FilterContextProvider>
    <Header/>
    <PageRouter/>
    </FilterContextProvider>
    </>
  )
}

export default App
