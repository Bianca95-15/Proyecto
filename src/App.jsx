import {useState} from 'react'
import { useGlobalContext } from './context/GlobalContextProvider'
import { products } from './pages/ProductsDescription'
import { useFilterContext } from './context/FilterContextProvider'
import Home, { Card } from './pages/Home'

function App() {
  const {productsList,searchString,handleSearchProducts} =useFilterContext()
  const {} = useGlobalContext()

  return (
    <>
    <input placeholder='Search Goods...' value={searchString} onChange={(e)=>handleSearchProducts(e.target.value)}/>
    <hr/>
    {
        productsList.map(product=>(
          <div>
            <h2>Nombre : {product.nombre}</h2>
            <h3>precio {product.precio}</h3>
          </div>
        ))
    }
      {<Home/>}
    </>
  )
}

export default App
