import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./responsive.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <img
          src="/images/Frame427318272.png"
          alt="Real Estate Agent Companion"
        />
        <div className="feature-text">
          <h3>Real Estate Agent Companion</h3>
          <p>
            Are you a real estate agent? Start listing your properties for sale
            and for rent today. Get started!
          </p>
          <Link to="/signup">
            <button className="feature-btn">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="feature">
        <div className="feature-text-left">
          <h3>Post a Property Request</h3>
          <p>
            Need help finding property for sale or for rent? Post a property
            request. It's fast and it's FREE.
          </p>
          <Link to="/signup">
            <button className="feature-btn">Post Request</button>
          </Link>
        </div>
        <img
          id="feature-img-left"
          src="/images/Frame427318273.png"
          alt="Post a Property Request"
        />
      </div>

      <div className="feature">
        <img
          src="/images/Frame427318274.png"
          alt="Advertise with the best platform"
        />
        <div className="feature-text">
          <h3>Advertise with the Best Platform</h3>
          <p>
            Market your for sale and for rent properties to thousands of
            potential buyers and renters. With Agent Connect, you can sell/ rent
            out your properties faster. Talk to us today.
          </p>
          <Link to="/signup">
            <button className="feature-btn">Contact Sales</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
