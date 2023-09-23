import React, {useState,useContext,createContext, useEffect} from 'react'
import { products } from '../pages/ProductsDescription'

const FilterContext =createContext()
const FilterContextProvider = ({children}) => {

const [searchString,setSearchString] = useState("")
const [productsList,setProductList] =useState(products)
const handleSearchProducts = (searchValue)=>{
    setSearchString(searchValue)
}

useEffect(()=>{
    setProductList(products.filter(product=>product.nombre.includes(searchString)))
},[searchString])  
return (
    <FilterContext.Provider value={{productsList,searchString,handleSearchProducts}}>{children}</FilterContext.Provider>
)
}

export default FilterContextProvider
export const useFilterContext = ()=>useContext (FilterContext)
