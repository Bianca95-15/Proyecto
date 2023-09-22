import React from 'react'
import { useGlobalContext } from './context/GlobalContextProvider'
import { products } from './pages/ProductsDescription'
import { useFilterContext } from './context/FilterContextProvider'


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
            <h2>Nombre : {product.name}</h2>
            <h3>precio {product.precio}</h3>
          </div>
        ))
    }
    </>
  )
}

export default App
