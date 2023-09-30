import React from 'react'
import { products } from './ProductsDescription'
import ProductDetails from './ProductDetails'
import {Link} from 'react-router-dom'
import { useFilterContext } from '../context/FilterContextProvider';
import cardStyles from "../pages/styles/card.css";
import homeStyles from "../pages/styles/home.css";
import Footer from '../components/footer'

const styles = {...cardStyles, ...homeStyles};
const Home = () => {
  const { productsList } = useFilterContext();

  return (
      <div className='homeView'>
          <h1> <span className='latest'>The latest.</span> Take a look at what’s new, right now. </h1>
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
          <Footer/>
      </div>
  )
}

export default Home
const Card = ({categoria, nombre, precio, id,img}) => { return (
  <div className='cardProducto'>
    <Link to={"/detail/" + id }> <img className='imgProducto' src={img} alt="producto" /> </Link>
    <div className='infoProducto'>
    <h3>{categoria}</h3>
    <h2>{nombre}</h2>
  <span className='precioProducto'>${precio}</span>
  </div>
  </div>
  )
}

export {Card}