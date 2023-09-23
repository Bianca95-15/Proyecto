import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductsDescription';
import { useGlobalContext } from '../context/GlobalContextProvider';
import { Error404 } from '../components';
import ProductCartButton from '../components/ProductCartButton';

const ProductDetails = () => {
    const rute = useParams();
    const productFound = products.find(product => product.id === Number(rute.id));
    const { handleAddProduct } = useGlobalContext();

    return (
        <div>
            {
                productFound ?
                    <>
                        <img src={productFound.img} alt={productFound.nombre} style={{ width: '300px' }} />
                        <h2>{productFound.nombre}</h2>
                        <p>{productFound.descripcion}</p>
                        <span>Precio: ${productFound.precio}</span>
                        <ProductCartButton id={productFound.id} />
                    </>
                    :
                    <Error404 mensaje={'El producto buscado no existe'} />
            }
        </div>
    )
}
export default ProductDetails;