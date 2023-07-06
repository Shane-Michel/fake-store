import React from 'react'
import './Header.css'
import {BsCart3} from 'react-icons/bs'


function Header() {

  return (
    <div className='header-container'>
        <img src='/fake-store-logo.png' alt="logo" />
        <div>
        <BsCart3 className='cart-icon'/>
        <p className='itemsInCart'>1</p>
        </div>
    </div>
  )
}

export default Header