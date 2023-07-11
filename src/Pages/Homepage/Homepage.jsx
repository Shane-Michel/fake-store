import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage-container'>
      <div className='btns-container'>
        <button>All</button>
        <button>Electronics</button>
        <button>Jewelry</button>
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
      </div>
      <div className='items-container'>
        <div className='item-card'>
          <div className='image-container'>
          {/* <img className='item-img' src="" alt="item" /> */}
          </div>
          <div className='item-info-container'>
            <p className='item-title'>title</p>
            <p className='item-cat'>cat</p>
          </div>
          <p className='item-price'>price</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage