import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductsDescription';
import { useGlobalContext } from '../context/GlobalContextProvider';
import { Error404, ProductCartButton } from '../components';
import cardStyles from "./styles/card.css";
import productDetailsStyles from "./styles/productDetails.css";

const ProductDetails = () => {
    const rute = useParams();
    const productFound = products.find(product => product.id === Number(rute.id));
    const { handleAddProduct } = useGlobalContext();

    return (
        <div className='detailCard'>
            {
                productFound ?
                    <>
                    <div>
                    <div className='productInfo'>
                    <h2>{productFound.nombre}</h2>
                    <h3>{productFound.categoria}</h3>
                    </div>
                    <div className='myProduct'>
                        <img className='imgProduct' src={productFound.img} alt={productFound.nombre} style={{ width: '300px' }} />
                        <br></br>
                        <span className='precioProduct'>Price: ${productFound.precio}</span>
                        </div>
                        </div>    
                        <div className='productDescription'>
                        <p>{productFound.descripcion}</p>
                        <ProductCartButton className="productButton" id={productFound.id} />
                        </div>    
                    </>
                    :
                    <Error404 mensaje={'El producto buscado no existe'} />
            }
        </div>
    )
}
export default ProductDetails;