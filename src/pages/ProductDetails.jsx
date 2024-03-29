import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { pid } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const url = `http://localhost:8090/api/products/${pid}`;

        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setProduct(data.product[0]);
                setLoading(false);
            })
            .catch(e => {
                console.error(e);
                setError('Error fetching product data');
                setLoading(false);
            });
    }, [pid]);

    if (loading) {
        return <h2>Cargando...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    const imageUrl = `/product${pid}.png`;

    return (
        <>
            <h1>Detalle del producto: {pid}</h1>
            {product ? (
                <div className='Card'>
                    <img src={imageUrl} alt={`Producto ${product.nombre}`} />
                    <h2>{product.categoria}</h2>
                    <h3>{product.nombre}</h3>
                    <span>${product.precio}</span>
                    <p>{product.descripcion}</p>
                </div>
            ) : <h2>No se encontró el producto.</h2>}
        </>
    );
};

export default ProductDetails