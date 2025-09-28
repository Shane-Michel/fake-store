import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer" id="stories">
      <div className="footer-inner container">
        <div className="footer-brand">
          <h3>FakeStore</h3>
          <p>
            A concept ecommerce destination that blends beautiful product storytelling with
            lightning fast interactions. Explore collections, bookmark your favourites and check
            out in seconds.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#collections">Collections</a>
            <a href="#new-arrivals">New arrivals</a>
            <Link to="/">Editorial</Link>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/contact-us">Contact</Link>
            <a href="#">About the brand</a>
            <a href="#">Sustainability</a>
          </div>

          <div className="footer-column newsletter">
            <h4>Stay in the loop</h4>
            <p>Weekly insights into launches, limited drops and curated styling tips.</p>
            <form className="newsletter-form">
              <label className="visually-hidden" htmlFor="footer-email">Email address</label>
              <input id="footer-email" type="email" placeholder="hello@youremail.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} FakeStore. Concept experience by Shane Michel_dev.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
