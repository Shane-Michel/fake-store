import React from 'react'
import './Header.css'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../../assets/fake-store-logo.png'


function Header() {

  return (
    <div className='header-container'>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <div>
        <BsCart3 className='cart-icon'/>
        <p className='itemsInCart'>1</p>
        </div>
    </div>
  )
}

export default Header