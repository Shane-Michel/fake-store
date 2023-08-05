import React, { useContext, useEffect, useState } from 'react'
import './CartItemCard.css'
import { FaTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function CartItemCard({product}) {
    const {items, addItems, removeItems} = useContext(CartContext);

    const [isfavorites, setIsFavorites] = useState(false);
  
    // need to check if this item is in cart any time cart changes
    useEffect(
      ()=> {
        setIsFavorites(items.find(item => item.id == product?.id))
      }, [items]
    )
  
    return (
      <div className='cart-item-card'>
        
        <Link to={`/details/${product?.id}`}><img className='cart-item-img' src={product?.image} alt="item" /></Link>
        <div className='cart-item-title-container'>
          <p className='cart-item-title'>{product?.title}</p>
        </div>
        <p className='cart-item-price'>${product?.price}</p>
        <p>1</p>
        <div className='trashBtn'>
            <FaTrashAlt className='trash-icon' onClick={() => removeItems(product?.id)} />
        </div>

      </div>
    )
}

export default CartItemCard