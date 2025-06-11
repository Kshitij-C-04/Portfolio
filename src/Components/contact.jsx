import React from 'react';
import './contact.css';
import theme from '../assets/theme_pattern.svg';

const Contact = ({ refProp }) => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "709d529c-2074-4a56-927c-177b1fdf0b98");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email Sent!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div ref={refProp} id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme} alt="theme pattern" />
      </div>

      <form onSubmit={onSubmit} className="contact-right">
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
