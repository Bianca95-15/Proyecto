import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
import { useGlobalContext } from '../context/GlobalContextProvider';
import {useFilterContext} from "../context/FilterContextProvider";
import styles from "../pages/styles/header.css"
import {NavLink} from 'react-router-dom'

const Header = () => {
    const {getTotalProductsInCart} = useGlobalContext()
    const {searchString, handleFilterProducto} = useFilterContext()
    return (
        <header className='encabezado'>
        <div className='brand'>   
        <img src="/logo.png" alt="brandLogo" className='brandLogo'/>    
                <span className='brandName'>Apple Store</span>
        </div>         
                <input type="text" placeholder='Search Goods...'  className='inputNav' value={searchString} onChange ={handleFilterProducto}/>
                <BiSearchAlt2 className='searchIcon'/>
                <div className='headerIcons'>
                    <NavLink to = "/contact"><button className='contactBtn'>Contact</button></NavLink>    
                    <NavLink to = "/home" className='homeIcon'><AiFillHome/></NavLink>
                    <NavLink to={"/cart"} className="cartIcon" >
                        <HiShoppingCart/>
                        <span className='totalProductos'>
                            {getTotalProductsInCart()}
                        </span>
                    </NavLink> 
                </div>
        </header>
    )
}

export default Header
