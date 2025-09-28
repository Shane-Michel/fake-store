import React from 'react';
import './ContactUs.css';
import { BsEnvelope, BsTelephone, BsArrowUpRight } from 'react-icons/bs';

function ContactUs() {
  return (
    <div className="contact-page">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="badge">Let&apos;s collaborate</span>
          <h1>We&apos;d love to hear how you&apos;re exploring FakeStore.</h1>
          <p>
            Share feedback, request a walkthrough or start a conversation about how this concept
            storefront could evolve into your next digital experience. We respond within one business
            day.
          </p>

          <div className="contact-highlights">
            <div>
              <BsEnvelope aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <a href="mailto:hello@fakestore.design">hello@fakestore.design</a>
              </div>
            </div>
            <div>
              <BsTelephone aria-hidden="true" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form>
            <div className="form-row">
              <div className="field">
                <label htmlFor="first-name">First name</label>
                <input type="text" id="first-name" name="firstName" placeholder="Lena" />
              </div>
              <div className="field">
                <label htmlFor="last-name">Last name</label>
                <input type="text" id="last-name" name="lastName" placeholder="Rivera" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows="5" placeholder="Share your ideas, questions or feedback." />
            </div>
            <button type="submit" className="submit-btn">
              Send message
              <BsArrowUpRight aria-hidden="true" />
            </button>
          </form>
          <p className="form-note">We&apos;ll never share your details. Expect a thoughtful reply within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
