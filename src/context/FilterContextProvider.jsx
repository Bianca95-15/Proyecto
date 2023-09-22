import React, {useState,useContext,createContext, useEffect} from 'react'
import { products } from '../pages/ProductsDescription'

const filterContext =createContext()
const FilterContextProvider = ({children}) => {

const [searchString,setSearchString] = useState("")
const [productsList,setProductList] =useState(products)
const handleSearchProducts = (searchValue)=>{
    setSearchString(searchValue)
}

useEffect(()=>{
    setProductList(products.filter(product=>product.name.includes(searchString)))
},[searchString])  
return (
    <filterContext.Provider value={{productsList,searchString,handleSearchProducts}}>{children}</filterContext.Provider>
)
}

export default FilterContextProvider
export const useFilterContext = ()=>useContext (filterContext)
