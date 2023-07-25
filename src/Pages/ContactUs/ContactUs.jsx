import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contact-us-container'>
        <div className='form-container'>
          <h1>Contact Us</h1>
          <form>
              <label htmlFor="firstName"></label>
              <input type="text" name="firstName" id="first-name" placeholder='First Name' />
              <label htmlFor="lastName"></label>
              <input type="text" name="lastName" id="last-name"  placeholder='Last Name'/>
              <label htmlFor="message"></label>
              <textarea name="message" id="message" cols="30" rows="5" placeholder='Write your message here'></textarea>
              <button type="submit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactUs