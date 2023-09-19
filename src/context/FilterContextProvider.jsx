import React,{useContext,createContext,useState, children} from 'react'
import { products } from '../pages/ProductsDescription'
const FilterContext = createContext()

const FilterContextProvider = ({children}) => {
    const [searchString,setSearchString]= useState ("")

    const [ListaProductos,setListaProductos] = useState(products)

    const handleFilterProducto=(evento)=>{

    setSearchString (evento.target.value)
    }
    return (
        <>
        {
        ListaProductos.filter(
            products => products.nombre.toLowerCase().includes(searchString.toLowerCase())
            ).map(({nombre,id,precio})=>(
            <products nombre ={nombre} id= {id} precio = {precio} key ={id}/>
        ))
    }
    <FilterContext.Provider value = {{
        handleFilterProducto,
        setSearchString,
        searchString,
        }}>
        {children}
    </FilterContext.Provider>
    </>
    )
}

export const useFilterContext = () => useContext (FilterContext)
export default FilterContextProvider
