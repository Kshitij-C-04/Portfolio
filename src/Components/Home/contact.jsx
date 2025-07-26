import React from 'react';
import './contact.css';
import theme from '../../assets/theme_pattern.svg';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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

      <div className="contact-container">
        {/* Left Side Info */}
        <div className="contact-left">
          <h2>Contact Information</h2>
          <div className="contact-info-block">
  <label>Email</label>
  <p>kshitijchaware@gmail.com</p>
</div>
<div className="contact-info-block">
  <label>Phone</label>
  <p>+91 81695 62904</p>
</div>
<div className="contact-info-block">
  <label>Location</label>
  <p>Thane, Maharashtra</p>
</div>


          <div className="contact-icons">
            <a href="https://github.com/Kshitij-C-04" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kshitij-chaware-245496205/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/kshitij8110/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            
          </div>
        </div>

        {/* Right Side Form */}
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
    </div>
  );
};

export default Contact;
