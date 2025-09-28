import './App.css'
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import Checkout from './Pages/Checkout/Checkout';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/contact-us' element={<ContactUs />}/>
          <Route path='/details/:productId' element={<ProductDetails />}/>
          <Route path='/cart' element={<Checkout />}/>
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
