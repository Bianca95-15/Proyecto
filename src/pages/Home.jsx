import React from 'react'
import { products } from './ProductsDescription'
import ProductDetails from './ProductDetails'
import {Link} from 'react-router-dom'
import { useFilterContext } from '../context/FilterContextProvider';
import cardStyles from "../pages/styles/card.css";
import homeStyles from "../pages/styles/home.css";

const styles = {...cardStyles, ...homeStyles};
const Home = () => {
  const { productsList } = useFilterContext();

  return (
      <div>
          <h1>The latest. Take a look at what’s new, right now. </h1>
          <div className='cardConteiner'>
              {
                  productsList.map(product => (
                      <Card
                        className="Cards"
                          categoria={product.categoria}
                          nombre={product.nombre}
                          precio={product.precio}
                          id={product.id}
                          img={product.img}
                          key={product.id}
                      />
                  ))
              }
          </div>
      </div>
  )
}

export default Home
const Card = ({categoria, nombre, precio, id,img}) => { return (
  <div className='cardProducto'>
    <Link to={"/detail/" + id }> <img src={img} alt="producto"/> </Link>
    <div className='infoProducto'>
    <h3>{categoria}</h3>
    <h2>{nombre}</h2>
  <span className='precioProducto'>${precio}</span>
  </div>
  </div>
  )
}

export {Card}