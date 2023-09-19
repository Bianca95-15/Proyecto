import React, { useContext, createContext,useState, children } from "react"
import { products } from "../pages/ProductsDescription"

const GlobalContext = createContext()

const GlobalContextProvider = ({children}) => {
    
    const [cart,setCart] = useState ([])

    const isInCart =(id) => cart.some (producto =>producto.id ==id)
    
    const findProductCart = (id) =>cart.find(producto => producto.id == id)

    const findProductById = (id) => products.find( prod =>Number (prod.id) === Number(id))
    
    const getTotalProductsInCart = () =>{
        let result = 0
        cart.forEach(product =>{
        result += product.quantity
        })
        return result
    }

    const handleDeletProduct = (id) =>{

        if(findProductCart(id).quantity ==1){
            setCart(cart.filter(producto => producto !==id))
        }
        else{
            setCart(
                cart.map((producto)=>{
                    if(producto.id ===id){
                        producto.quantity --
                    }
                    return producto
                })
            )    
        }
    }
    const handleAddProduct = (id) => {
        const productFound =findProductById (id)
        if (isInCart(id)){
            setCart(
                cart.map((producto)=>{
                    if(producto.id ===id){
                        producto.quantity ++
                    }
                    return producto
                })
            )
        }
        else{
            setCart ([...cart,{...productFound,quantity:1}])
        }

    }
    
    const getTotalCart = () =>{
        let result =0
        cart.forEach(producto =>{
            result += producto.precio * producto.quantity
        })
        return  result
    }
    console.log (cart)
return (
    <GlobalContext.Provider value={{
    handleAddProduct,
    handleDeletProduct,
    isInCart,
    findProductCart,
    getTotalProductsInCart,
    getTotalCart,
    cart
    }}>
    {children}
    </GlobalContext.Provider>
)
}

export const useGlobalContext = () => useContext (GlobalContext)
export default GlobalContextProvider