
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import cardStyles from "../pages/styles/card.css";
import homeStyles from "../pages/styles/home.css";

const styles = {...cardStyles, ...homeStyles};

const Home = () => {
    const [productsList, setProductsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('http://localhost:8090/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProductsList(data.products); 
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='homeView'>
            <h1><span className='latest'>The latest.</span> Take a look at what’s new, right now.</h1>
            <div className='cardConteiner'>
            {productsList.map(product => (
    <Card
        className="Cards"
        categoria={product.categoria}
        nombre={product.nombre}
        precio={product.precio}
        pk_id_producto={product.pk_id_producto} 
        img={product.img}
        key={product.pk_id_producto}
    />
))}
            </div>
            <Footer/>
        </div>
    );
};

const Card = ({ categoria, nombre, precio, pk_id_producto, img }) => {

  const imageUrl = pk_id_producto ? `/product${pk_id_producto}.png` : '/placeholder.png';

  return (
      <div className='cardProducto'>
          <Link to={"/detail/" + pk_id_producto}>
              <img className='imgProducto' src={imageUrl} alt={`Producto ${nombre}`} />
          </Link>
          <div className='infoProducto'>
              <h3>{categoria}</h3>
              <h2>{nombre}</h2>
              <span className='precioProducto'>${precio}</span>
          </div>
      </div>
  );
};


export default Home;
export { Card };



