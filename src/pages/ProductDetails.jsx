import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductsDescription';
import { useGlobalContext } from '../context/GlobalContextProvider';
import { Error404, ProductCartButton } from '../components';
import styles from "../pages/styles/productDetails.css"


const ProductDetails = () => {
    const rute = useParams();
    const productFound = products.find(product => product.id === Number(rute.id));
    const { handleAddProduct } = useGlobalContext();

    return (
        <div className='detailCard'>
            {
                productFound ?
                    <>
                    <div className='myProduct'>
                        <img src={productFound.img} alt={productFound.nombre} style={{ width: '300px' }} />
                        <br></br>
                        <span>Precio: ${productFound.precio}</span>
                        </div>    
                        <h2>{productFound.nombre}</h2>
                        <p>{productFound.descripcion}</p>
                        
                        <ProductCartButton id={productFound.id} />
                    </>
                    :
                    <Error404 mensaje={'El producto buscado no existe'} />
            }
        </div>
    )
}
export default ProductDetails;