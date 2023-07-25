import './App.css'
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUs/ContactUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
        <Route path='/details/:productId' element={<ProductDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
