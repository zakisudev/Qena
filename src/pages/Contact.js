import React from 'react';

import '../styles/contact.css';

export default function Contact() {
  return (
    <div>
      <div className="container">
        <h1>Contact Us</h1>

        <form method="POST" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}
