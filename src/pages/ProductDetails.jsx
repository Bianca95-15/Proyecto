import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { pid } = useParams(); // Utilizamos 'pid' en lugar de 'id' para coincidir con tu backend.
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // No incluimos la cabecera de Authorization en la petición
        const url = `http://localhost:8090/api/products/${pid}`;

        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            setProduct(data.product[0]); // Aquí suponemos que el backend devuelve el objeto de producto directamente
            console.log(data.product[0]);
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

    return (
        <>
            <h1>Detalle del producto: {pid}</h1>
            {product ? <Product {...product} /> : <h2>No se encontró el producto.</h2>}
        </>
    );
};

const Product = ({ id, categoria, nombre, precio, descripcion }) => {
    return (
        <div key={id} className='Card'>
            <h2>{categoria}</h2>
            <h3>{nombre}</h3>
            <span>${precio}</span>
            <p>{descripcion}</p>
        </div>
        
    );
};

export default ProductDetails