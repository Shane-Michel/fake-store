import { useContext, useMemo, useState } from 'react';
import './Checkout.css';
import { CartContext } from '../../Context/CartContext';
import CartItemCard from '../../Components/CartItemCard/CartItemCard';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowUpRight } from 'react-icons/bs';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '3rem 2.5rem',
    borderRadius: '24px',
    border: 'none',
    maxWidth: '420px',
    width: 'min(420px, 92vw)',
    boxShadow: '0 30px 60px rgba(20, 19, 34, 0.25)',
  },
  overlay: {
    backgroundColor: 'rgba(17, 19, 31, 0.55)',
    zIndex: 1100,
  },
};

Modal.setAppElement(document.getElementById('root'));

function Checkout() {
  const { items, setItems } = useContext(CartContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  const subtotal = useMemo(() => items.reduce((total, item) => total + item.price, 0), [items]);
  const shipping = subtotal > 0 ? 0 : 0;
  const taxEstimate = subtotal * 0.08;
  const total = subtotal + shipping + taxEstimate;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleCheckout = () => {
    if (!items.length) return;
    setItems([]);
    openModal();
  };

  return (
    <div className="checkout-page">
      <section className="checkout-hero">
        <div className="container">
          <span className="badge">Checkout</span>
          <h1>Your curated bag is almost home.</h1>
          <p>
            Review your saved pieces, confirm the order summary and experience a streamlined checkout
            flow that mirrors a premium ecommerce build.
          </p>
        </div>
      </section>

      <div className="checkout-content container">
        <section className="cart-panel">
          <div className="panel-heading">
            <h2>Saved favourites</h2>
            <span>{items.length} item{items.length === 1 ? '' : 's'}</span>
          </div>

          <div className="cart-items">
            {items.length > 0 ? (
              items.map((item) => <CartItemCard key={item?.id} product={item} />)
            ) : (
              <div className="empty-cart">
                <h3>Your bag is currently empty</h3>
                <p>
                  Add a few favourites from the homepage and they will appear here ready for checkout.
                </p>
                <Link to="/" className="btn-primary">
                  Discover products
                  <BsArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          <Link to="/" className="back-link">
            <BsArrowLeft aria-hidden="true" />
            Continue browsing
          </Link>
        </section>

        <aside className="summary-panel">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated tax</span>
            <span>${taxEstimate.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button type="button" className="checkoutBtn" onClick={handleCheckout} disabled={!items.length}>
            Complete order
          </button>

          <div className="summary-note">
            <p>
              This demo keeps your cart items stored locally so you can explore persistent state even
              after a refresh.
            </p>
          </div>
        </aside>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles} contentLabel="Checkout confirmation">
        <div className="modal-content">
          <div className="modal-badge">Success</div>
          <h2>Your order is on the way!</h2>
          <p>
            We&apos;ve sent a confirmation email with delivery details. Continue exploring curated edits or
            share the experience with your team.
          </p>
          <Link to="/" className="btn-primary" onClick={closeModal}>
            Return to storefront
            <BsArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default Checkout;
