import React from 'react'
import './ItemCard.css'

function ItemCard({item}) {

  return (
    <div className='item-card'>
      <div className='likeBtn'>
        <img src="src/assets/heart.png" alt="" />
      </div>
      <div className='image-container'>
      <img className='item-img' src={item?.image} alt="item" />
      </div>
      <div className='item-info-container'>
        <p className='item-title'>{item?.title}</p>
        <p className='item-cat'>{item?.category}</p>
      </div>
      <p className='item-price'>{item?.price}</p>
    </div>
  )
}

export default ItemCard