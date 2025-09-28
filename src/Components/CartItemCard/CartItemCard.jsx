import React, { useContext, useEffect, useState } from 'react';
import './CartItemCard.css';
import { FaTrashAlt } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function CartItemCard({ product }) {
  const { items, removeItems } = useContext(CartContext);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(Boolean(items.find((item) => item.id === product?.id)));
  }, [items, product?.id]);

  const handleRemove = () => {
    removeItems(product?.id);
  };

  return (
    <div className="cart-item-card">
      <Link to={`/details/${product?.id}`} className="cart-item-media">
        <img className="cart-item-img" src={product?.image} alt={product?.title} loading="lazy" />
      </Link>

      <div className="cart-item-info">
        <Link to={`/details/${product?.id}`} className="cart-item-title">
          {product?.title}
        </Link>
        <p className="cart-item-category">{product?.category}</p>
        <div className="cart-item-meta">
          <span className="cart-item-price">${Number(product?.price || 0).toFixed(2)}</span>
          {product?.rating?.rate && (
            <span className="cart-item-rating">{product.rating.rate.toFixed(1)} ★</span>
          )}
        </div>
      </div>

      <div className="cart-item-actions">
        <span className="cart-item-qty">Qty: 1</span>
        <button type="button" className="remove-btn" onClick={handleRemove} aria-label="Remove from cart">
          <FaTrashAlt aria-hidden="true" />
          Remove
        </button>
        {isFavourite && <span className="cart-item-tag">Saved</span>}
      </div>
    </div>
  );
}

export default CartItemCard;
