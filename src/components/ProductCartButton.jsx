import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductCartButton = ({id}) => {
    const {isInCart,handleAddProduct,handleDeletProduct,findProductCart} = useGlobalContext ()
    return (
    <>
        {
        isInCart(id)
        ?
            <div>
                <button onClick={()=>handleDeletProduct(id)}> 
                    -
                </button>
                {findProductCart(id).quantity}
                <button onClick={() =>handleAddProduct(id)}>
                    +
                </button>
            </div>
        :
        <button onClick={() => handleAddProduct(id)}>Add to Cart</button>
        }
        
    </>
)
}

export default ProductCartButton