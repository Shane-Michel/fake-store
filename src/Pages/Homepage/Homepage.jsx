import React, { useEffect, useMemo, useState } from 'react';
import './Homepage.css';
import ItemCard from '../../Components/ItemCard/ItemCard';
import CategoryBtn from '../../Components/CategoryBtn/CategoryBtn';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import { FiSearch, FiTruck, FiShield, FiRefreshCw } from 'react-icons/fi';

function Homepage() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchStorefrontData() {
      setLoading(true);
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get('https://fakestoreapi.com/products/categories'),
          axios.get('https://fakestoreapi.com/products'),
        ]);

        setCategories(categoriesResponse.data);
        setAllProducts(productsResponse.data);
      } catch (err) {
        setError('We were unable to reach the store right now. Please refresh to try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchStorefrontData();
  }, []);

  useEffect(() => {
    if (!allProducts.length) {
      setProducts([]);
      return;
    }

    let filtered = activeCategory === 'all'
      ? [...allProducts]
      : allProducts.filter((product) => product.category === activeCategory);

    if (searchTerm.trim()) {
      const query = searchTerm.trim().toLowerCase();
      filtered = filtered.filter((product) => product.title.toLowerCase().includes(query));
    }

    setProducts(filtered);
  }, [allProducts, activeCategory, searchTerm]);

  const heroHighlight = useMemo(() => {
    if (!allProducts.length) return null;
    const highRated = allProducts.find((product) => product?.rating?.rate >= 4.5);
    return highRated || allProducts[0];
  }, [allProducts]);

  const curatedStories = useMemo(() => ([
    {
      title: 'Everyday Elevated',
      description: 'Soft tailoring, breathable knits and pieces made to move wherever the day leads.',
      accent: 'story-one',
    },
    {
      title: 'Objects of Desire',
      description: 'Limited-run accessories designed in micro batches. Blink and you might miss them.',
      accent: 'story-two',
    },
    {
      title: 'Nature Positive',
      description: 'Materials certified with a lighter footprint and planet-first packaging on every order.',
      accent: 'story-three',
    },
  ]), []);

  const serviceHighlights = useMemo(() => ([
    {
      icon: <FiTruck />,
      title: '48h express delivery',
      description: 'Complimentary tracked shipping on every order with carbon offset logistics.',
    },
    {
      icon: <FiShield />,
      title: 'Secure payments',
      description: 'Protected checkout with multiple payment options and instant digital receipts.',
    },
    {
      icon: <FiRefreshCw />,
      title: 'Easy returns',
      description: '30-day exchanges and instant refunds direct to your original payment method.',
    },
  ]), []);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="badge">New season edit</span>
            <h1>Design-led commerce for modern shoppers.</h1>
            <p>
              Welcome to FakeStore, a concept ecommerce experience that blends a stunning aesthetic
              with smooth, reactive interactions. Curate favourites, deep-dive into details and glide
              through checkout — all on a single responsive canvas.
            </p>

            <div className="hero-search" role="search">
              <FiSearch aria-hidden="true" />
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for pieces, brands or moods"
              />
            </div>

            <div className="hero-actions">
              <a className="btn-primary" href="#new-arrivals">
                Shop featured
                <BsArrowUpRight aria-hidden="true" />
              </a>
              <Link className="btn-secondary" to="/contact-us">
                Talk to our stylists
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <span>1.4k+</span>
                <p>Design-forward products curated from the Fake Store API.</p>
              </div>
              <div>
                <span>89%</span>
                <p>Of visitors add favourites on their first browse.</p>
              </div>
              <div>
                <span>24/7</span>
                <p>Instant support with a responsive, accessible interface.</p>
              </div>
            </div>
          </div>

          {heroHighlight && (
            <aside className="hero-highlight">
              <div className="hero-highlight-media">
                <img src={heroHighlight?.image} alt={heroHighlight?.title} />
              </div>
              <div className="hero-highlight-body">
                <span className="tagline">Spotlight</span>
                <h3>{heroHighlight?.title}</h3>
                <p>{heroHighlight?.category}</p>
                {heroHighlight?.rating && (
                  <div className="hero-rating">
                    <span>{heroHighlight.rating.rate.toFixed(1)} ★</span>
                    <small>{heroHighlight.rating.count} reviews</small>
                  </div>
                )}
                <Link to={`/details/${heroHighlight?.id}`} className="btn-secondary">
                  View story
                  <BsArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </section>

      <section className="service-section">
        <div className="container service-grid">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="category-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="tagline">Choose your vibe</span>
              <h2>Shop by curated moodboards</h2>
            </div>
            <p>
              Filter the experience by selecting a category or search for something specific. Results
              update instantly without reloading the page.
            </p>
          </div>

          <div className="category-pills">
            {[ 'all', ...categories ].map((category) => (
              <CategoryBtn
                key={category}
                category={category}
                onSelect={handleCategorySelect}
                isActive={activeCategory === category}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="new-arrivals" className="products-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="tagline">New arrivals</span>
              <h2>Trending right now</h2>
            </div>
            <Link to="/cart" className="btn-secondary">
              View your favourites
              <BsArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          {error && <div className="error-banner">{error}</div>}

          <div className="product-grid">
            {loading && (
              Array.from({ length: 8 }).map((_, index) => (
                <div className="product-skeleton" key={index}>
                  <div className="skeleton-img" />
                  <div className="skeleton-line" />
                  <div className="skeleton-line short" />
                </div>
              ))
            )}

            {!loading && products.length > 0 && (
              products.map((product) => (
                <ItemCard key={product?.id} product={product} />
              ))
            )}
          </div>

          {!loading && products.length === 0 && !error && (
            <div className="empty-state">
              <h3>No matches yet</h3>
              <p>
                Try a different search or pick another category to see more of FakeStore&apos;s curated
                catalogue.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="tagline">Curated edits</span>
              <h2>Story-driven shopping journeys</h2>
            </div>
            <p>
              Build a moodboard-driven storefront by layering collections and storytelling cards.
              The layout remains fully responsive and keyboard navigable.
            </p>
          </div>

          <div className="stories-grid">
            {curatedStories.map((story) => (
              <article key={story.title} className={`story-card ${story.accent}`}>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <a href="#new-arrivals">
                  Explore edit
                  <BsArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container testimonial-card">
          <div>
            <span className="tagline">Experience notes</span>
            <h2>“The FakeStore demo nails how fast, elegant ecommerce should feel.”</h2>
            <p>
              Smooth filtering, persistent favourites and rich detail pages demonstrate how to present
              products beautifully without sacrificing performance. Everything is accessible, mobile
              friendly and built with modern React patterns.
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-avatar" aria-hidden="true">SM</div>
            <div>
              <p className="author-name">Shane Michel</p>
              <p className="author-role">Product designer & developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
