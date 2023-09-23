import React from 'react'
import { products } from './ProductsDescription'
import ProductDetails from './ProductDetails'
import {Link} from 'react-router-dom'
import { useFilterContext } from '../context/FilterContextProvider';

const Home = () => {
  const { productsList } = useFilterContext();

  return (
      <div>
          <h1> Apple Store</h1>
          <div>
              {
                  productsList.map(product => (
                      <Card
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
  <div>
    <Link to={"/detail/" + id }> <img src={img} alt="producto"/> </Link>
    <h3>{categoria}</h3>
    <h2>{nombre}</h2>
  <span>${precio}</span>
  </div>
  )
}

export {Card}