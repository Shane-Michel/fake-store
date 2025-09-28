import React, { useContext } from 'react';
import './Header.css';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/fake-store-logo.png';
import { CartContext } from '../../Context/CartContext';

function Header() {
  const { items } = useContext(CartContext);
  const cartLabel = `View cart with ${items.length} item${items.length === 1 ? '' : 's'}`;

  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <img src={logo} alt="FakeStore logo" />
          </span>
          <span className="brand-label">
            FakeStore
            <span className="brand-subtitle">Curated commerce</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#collections">Collections</a>
          <a href="#new-arrivals">New in</a>
          <a href="#stories">Stories</a>
          <Link to="/contact-us">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/contact-us" className="support-link">Need help?</Link>
          <Link to="/cart" className="cart-pill" aria-label={cartLabel}>
            <BsCart3 />
            <span>Cart</span>
            <span className="cart-count">{items.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
