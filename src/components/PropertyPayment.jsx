import React from "react";
import { Link } from "react-router-dom";

const PropertyPayment = ({ propertyId }) => {
  return (
    <div className="property-payment">
      <h2>Payment</h2>
      <p>
        Secure your dream apartment with <strong>Agent Connect</strong>. We
        offer fixed 10% Commission, Reliable system and verified Agents. Agent
        connect does not require inspection or loyalty fee.
      </p>
      <p className="payment-warning">
        <strong>Note;</strong>{" "}
        <span>
          Any payment made off this application has nothing to do with Agent
          connect.
        </span>
      </p>
      <Link to={`/checkout/${propertyId}`}>
        <button className="rent-btn">Rent</button>
      </Link>
    </div>
  );
};

export default PropertyPayment;
