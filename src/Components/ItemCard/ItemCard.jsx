import React, { useContext, useEffect, useState } from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'


function ItemCard({product}) {

  const {items, addItems, removeItems} = useContext(CartContext);

  const [isfavorites, setIsFavorites] = useState(false);

  // need to check if this item is in cart any time cart changes
  useEffect(
    ()=> {
      setIsFavorites(items.find(item => item.id == product.id))
    }, [items]
  )

  return (
    <div className='item-card'>
      <div className='likeBtn'>
        {
          isfavorites?
          <FaHeart className='heart-icon' onClick={() => removeItems(product?.id)} />
          :
          <FaRegHeart className='heart-icon' onClick={() => addItems(product)} />
        }
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