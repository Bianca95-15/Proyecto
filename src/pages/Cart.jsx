import React from 'react'
import {useGlobalContext} from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'
import cartStyles from "../pages/styles/cart.css"
const Cart = () => {
  const {cart,getTotalCart} = useGlobalContext()
  return (
    <div className='purchasedProducts'> 
      {
        cart.map(({categoria, nombre, id, precio,img,quantity}) =>(
          <CartItem categoria={categoria} nombre={nombre} id={id} precio={precio} img={img} key={id} quantity={quantity}/>
        ))
      }
      <div className='totalCart'>
      <h3>Total : ${getTotalCart()}</h3>
      <button>Buy Now</button>
      </div> 
    </div>
  )
}


export default Cart

const CartItem = ({categoria, nombre, precio, id,img,quantity}) => { 
  const { handleDeletProduct } = useGlobalContext();
  return (
    <div className='productBoughtConteinter'>
      <div className='productBought'>
        <Link to ={"/detail/" + id }> <img className='imgBought' src={img} alt="producto"/> </Link>
        <h3>{categoria}</h3>
        <h2>{nombre}</h2>
        <span>${precio}</span>
        <button onClick={() => handleDeletProduct(id)}>Eliminar</button>
        <br></br>
      </div>
      <div className='totalPurchased'>
        <span>Total purchased: {quantity} </span>
      </div>
    </div>
  )
}
