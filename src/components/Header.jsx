import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
import {BiSolidContact} from "react-icons/bi"
import { useGlobalContext } from '../context/GlobalContextProvider';
import {useFilterContext} from "../context/FilterContextProvider";
import styles from "../pages/styles/header.css"
import {NavLink} from 'react-router-dom'

const Header = () => {
    const {getTotalProductsInCart} = useGlobalContext()
    const {searchString, handleSearchProducts} = useFilterContext()
    return (
        <header className='encabezado'>
        <div className='brand'>   
        <img src="/logo.png" alt="brandLogo" className="brandLogo"/>    
                <span className='brandName'>Apple Store</span>
        </div>         
                <input type="text" placeholder='Search Goods...'  className='inputNav' value={searchString}
                onChange={(e)=>handleSearchProducts(e.target.value)}/>
                <BiSearchAlt2 className='searchIcon'/>
                <div className='headerIcons'>
                    <NavLink to = "/contact" className='contactIcon'><BiSolidContact/></NavLink>    
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
