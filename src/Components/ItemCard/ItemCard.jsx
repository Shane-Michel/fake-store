import React, { useContext, useEffect, useState } from 'react';
import './ItemCard.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import { CartContext } from '../../Context/CartContext';

function ItemCard({ product }) {
  const { items, addItems, removeItems } = useContext(CartContext);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    setIsFavourite(Boolean(items.find((item) => item.id === product?.id)));
  }, [items, product?.id]);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      removeItems(product?.id);
    } else {
      addItems(product);
    }
  };

  const priceLabel = Number(product?.price || 0).toFixed(2);
  const rating = product?.rating?.rate ? product.rating.rate.toFixed(1) : null;

  return (
    <article className="item-card">
      <button
        type="button"
        className="favourite-toggle"
        onClick={handleToggleFavourite}
        aria-label={isFavourite ? 'Remove from favourites' : 'Save to favourites'}
      >
        {isFavourite ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
      </button>

      <Link to={`/details/${product?.id}`} className="item-card-media">
        <img src={product?.image} alt={product?.title} loading="lazy" />
      </Link>

      <div className="item-card-body">
        <Link to={`/details/${product?.id}`} className="item-title">
          {product?.title}
        </Link>
        <p className="item-category">{product?.category}</p>

        <div className="item-meta">
          <span className="item-price">${priceLabel}</span>
          {rating && <span className="item-rating">{rating} ★</span>}
        </div>
      </div>

      <button type="button" className="add-to-cart" onClick={handleToggleFavourite}>
        {isFavourite ? 'Remove item' : 'Add to bag'}
        <BsArrowUpRight aria-hidden="true" />
      </button>
    </article>
  );
}

export default ItemCard;
