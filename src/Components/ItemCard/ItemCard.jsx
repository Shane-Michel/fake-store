import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'


function ItemCard({product}) {


  return (
    <div className='item-card'>
      <div className='likeBtn'>
        <img src="src/assets/heart.png" alt="" />
      </div>
      <div className='image-container'>
      <Link to={`/details/${product?.id}`}><img className='item-img' src={product?.image} alt="item" /></Link>
      </div>
      <div className='item-info-container'>
        <p className='item-title'>{product?.title}</p>
        <p className='item-cat'>{product?.category}</p>
      </div>
      <p className='item-price'>${product?.price}</p>
    </div>
  )
}

export default ItemCard