import React, { useContext, useEffect, useMemo, useState } from 'react';
import './ProductDetails.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';
import { BsArrowLeft, BsCheckCircle } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { StorefrontDataContext } from '../../Context/StorefrontDataContext';

function ProductDetails() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { items, addItems, removeItems } = useContext(CartContext);
  const { getProductById } = useContext(StorefrontDataContext);

  useEffect(() => {
    const cachedProduct = getProductById(productId);
    if (!cachedProduct) {
      return;
    }

    setProductDetail(cachedProduct);
    setError('');
    setLoading(false);
  }, [getProductById, productId]);

  useEffect(() => {
    const cachedProduct = getProductById(productId);
    if (cachedProduct) {
      return;
    }

    let ignore = false;

    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        if (!ignore) {
          setProductDetail(response.data);
          setError('');
        }
      } catch (err) {
        if (!ignore) {
          setError('We couldn\'t load this product right now. Please try again shortly.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      ignore = true;
    };
  }, [getProductById, productId]);

  const isInCart = useMemo(
    () => Boolean(items.find((item) => String(item.id) === String(productId))),
    [items, productId],
  );

  const handleToggleCart = () => {
    if (!productDetail) return;
    if (isInCart) {
      removeItems(productDetail.id);
    } else {
      addItems(productDetail);
    }
  };

  const highlights = [
    'Free express shipping on every order',
    'Planet-friendly, recycled packaging materials',
    '30-day returns with instant refunds',
  ];

  return (
    <div className="product-details-page">
      <div className="container">
        <Link to="/" className="details-back">
          <BsArrowLeft aria-hidden="true" />
          Back to collections
        </Link>

        {loading && (
          <div className="product-loading">Loading product details…</div>
        )}

        {!loading && error && <div className="product-error">{error}</div>}

        {!loading && productDetail && (
          <div className="product-details-card">
            <div className="product-media">
              <img className="product-image" src={productDetail?.image} alt={productDetail?.title} />
            </div>

            <div className="product-info">
              <span className="badge">{productDetail?.category}</span>
              <h1 className="product-title">{productDetail?.title}</h1>
              {productDetail?.rating && (
                <div className="product-rating">
                  <span>{productDetail.rating.rate.toFixed(1)} ★</span>
                  <small>{productDetail.rating.count} reviews</small>
                </div>
              )}
              <p className="product-price">${Number(productDetail?.price || 0).toFixed(2)}</p>
              <p className="product-description">{productDetail?.description}</p>

              <div className="product-actions">
                <button type="button" className="btn-primary" onClick={handleToggleCart}>
                  {isInCart ? 'Remove from bag' : 'Add to bag'}
                </button>
                <button
                  type="button"
                  className="wishlist-btn"
                  onClick={handleToggleCart}
                  aria-label={isInCart ? 'Remove from favourites' : 'Save to favourites'}
                >
                  {isInCart ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
                  <span>{isInCart ? 'Saved to favourites' : 'Save for later'}</span>
                </button>
              </div>

              <ul className="product-highlights">
                {highlights.map((highlight) => (
                  <li key={highlight}>
                    <BsCheckCircle aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
