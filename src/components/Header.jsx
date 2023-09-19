import React from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import {AiFillHome} from "react-icons/ai";
import {HiShoppingCart} from "react-icons/hi";
import { useGlobalContext } from '../context/GlobalContextProvider';
import {useFilterContext} from "../context/FilterContextProvider";
import Cart from "../pages/Cart"
import {NavLink} from 'react-router-dom'

const Header = () => {
    const {getTotalProductsInCart} = useGlobalContext()
    const {searchString, handleFilterProducto} = useFilterContext()
    return (
        <header>
            <nav className='appHeader'>
                <span>Your Brand</span>
                <input type="text" placeholder='Search Goods...'  className='inputNav' value={searchString} onChange ={handleFilterProducto}/>
                <BiSearchAlt2/>
                <div className='headerIcons'>
                    <NavLink to = "/contact"><button className='contactBtn'>Contact</button></NavLink>    
                    <NavLink to = "/home" className='homeIcon'><AiFillHome/></NavLink>
                    <NavLink to={"/cart"}>
                        <HiShoppingCart/>
                        <span>
                            {getTotalProductsInCart()}
                        </span>
                    </NavLink> 
                </div>
            </nav>
        </header>
    )
}

export default Header
