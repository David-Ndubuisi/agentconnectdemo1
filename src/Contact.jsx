import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you. Reach out with questions, suggestions, or
          feedback!
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            <input type="text" placeholder="Enter your subject" required />
          </label>
          <label>
            <textarea
              placeholder="Type your message here..."
              rows="5"
              required
            />
          </label>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Our Office</h3>
          <p>14 Adeniran Ogunsanya Street, Surulere, Lagos</p>
          <p>Email: support@agentconnect.com</p>
          <p>Phone: +234 800 000 0000</p>
          <div className="map-placeholder">
            {/* Optional Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
