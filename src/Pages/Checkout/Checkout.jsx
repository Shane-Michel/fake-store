import React, { useContext, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../Context/CartContext';
import CartItemCard from '../../Components/CartItemCard/CartItemCard';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      padding: '4rem 2rem',
    },
};
  
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'));

function Checkout() {

    const {items, setItems} = useContext(CartContext);
    
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    console.log(totalPrice);

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
        
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#3A4895';
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleCheckout() {
        setItems([]);
        openModal();
    }

  return (
    <div className='checkout-container'>
        <div className='cart-container'>

            <div className='cart-container-header'>
                <p className='itemP'>Item</p>
                <div className='titleP'></div>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>

            <div className='itemsInCart'>
                {
                    items.length > 0?
                    items.map(item => <CartItemCard key={item?.id} product={item} />)
                    : <p>No Products selected</p>
                }
            </div>

            <div className='total-submit-container'>
                <div className='total-submit'>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className='checkoutBtn'onClick={handleCheckout}>Checkout</button>
                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Your Order was successful!</h2><br /><br />
                            
                            <div>Check your email for the order confirmation. Thank you for shopping with Fake Store!</div><br /><br />
                            <form>
                                <Link to={'/'}><button className='returnHomeBtn'>Return to Main Page</button></Link>
                            </form>
                        </Modal>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Checkout