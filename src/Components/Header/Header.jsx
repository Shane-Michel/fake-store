import React, { useContext } from 'react'
import './Header.css'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../../assets/fake-store-logo.png'
import { CartContext } from '../../Context/CartContext'


function Header() {

  const {items} = useContext(CartContext);

  return (
    <div className='header-container'>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <Link to="/cart">
          <div className='cartImage-container'>
            <BsCart3 className='cart-icon'/>
            <p className='numItemsInCart'>{items.length}</p>
          </div>
        </Link>
    </div>
  )
}

export default Header