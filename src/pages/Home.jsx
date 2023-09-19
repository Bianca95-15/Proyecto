import React from 'react'
import { products } from './ProductsDescription'
import ProductDetails from './ProductDetails'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1> Apple Store</h1>
        <div>
            {
                products.map(({categoria, nombre, id, precio,img}) =>(
                    <Card categoria={categoria} nombre={nombre} id={id} precio={precio} img={img} key={id}/>
                ))
            }
        </div>
    </div>
)
}

export default Home
const Card = ({categoria, nombre, precio, id,img}) => { return (
  <div>
    <a href={"/detail/" + id }> <img src={img} alt="producto"/> </a>
    <h3>{categoria}</h3>
    <h2>{nombre}</h2>
  <span>${precio}</span> 
  </div>
  )
}

export {Card}