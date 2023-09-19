import React from 'react'
import {useGlobalContext} from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'
const Cart = () => {
  const {cart,getTotalCart} = useGlobalContext()
  return (
    <div> 
      {
        cart.map(({categoria, nombre, id, precio,img,quantity}) =>(
          <CartItem categoria={categoria} nombre={nombre} id={id} precio={precio} img={img} key={id} quantity={quantity}/>
        ))
      } 
      <h3>Total : ${getTotalCart()}</h3>
    </div>
  )
}

export default Cart
const CartItem = ({categoria, nombre, precio, id,img,quantity}) => { 
  return (
  <div>
    <Link to ={"/detail/" + id }> <img src={img} alt="producto"/> </Link>
    <h3>{categoria}</h3>
    <h2>{nombre}</h2>
    <span>${precio}</span>
    <br></br>
    <span>Total purchased: {quantity} </span>
  </div>
  )
}

/* export {CartItem} */