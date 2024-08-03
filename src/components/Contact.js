import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-container">
      <img src="/images/logo.gif" alt="Logo" className="contact-logo" />
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to discuss potential projects, feel free to get in touch with us!</p>
      <p>Email: <a href="mailto:mladenamaxa22@gmail.com">mladenamaxa22@gmail.com</a></p>
    </div>
  );
}

export default Contact;
