import React from "react";
import Pixaby from "./images/Pixabay-2618421.png";
import "./styles.css"; // Import the CSS file

const CallToAction = () => {
  return (
    <div className="cta-section">
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to get your new home the easiest way?</h2>
          <p>Get the best house hunting experience you can ever imagine</p>
          <button className="cta-button">SIGN UP NOW</button>
        </div>
        <div className="cta-image-container">
          <img src={Pixaby} alt="House" className="cta-image" />
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
