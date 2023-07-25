import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <p>Made with &#10084; by Shane Michel_dev</p>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  )
}

export default Footer