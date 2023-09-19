import React,{useState} from 'react'
import { products } from './ProductsDescription'
import { useParams } from 'react-router-dom'
import { Error404, ProductCartButton } from '../components'
import { useGlobalContext} from '../context/GlobalContextProvider'

const ProductDetails = () => {
    const rute = useParams ()
    const productFound = products.find ((product) => product.id ===Number(rute.id))
    const {handleAddProduct,handleDeletProduct,isInCart,findProductCart}= useGlobalContext()
    
    return (
        <div>
        {
        productFound 
        ?
        <>
        <h2>{productFound.nombre}</h2>
        <img src={productFound.img}/>
        <span> ${productFound.precio}</span>
        <p>{productFound.descripcion}</p>
        <div>{productFound.coloresDisponibles}</div>
        <ProductCartButton id = {productFound.id}/>
        </>
        :
        <Error404 mensaje={'El producto buscado no existe'} />
    }
    </div>
)
}

export default ProductDetails