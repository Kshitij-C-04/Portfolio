import React from 'react';
import './contact.css';
import theme from '../assets/theme_pattern.svg';

const Contact = ({ refProp }) => {
  return (
    <div ref={refProp} id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <form className="contact-right">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" placeholder="Enter your name" name="name" />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" placeholder="Enter your email" name="email" />

        <label htmlFor="message">Write your message here:</label>
        <textarea
          id="message"
          name="message"
          rows={8}
          placeholder="Enter your message..."
        ></textarea>

        <button type="submit" className="contact-submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
