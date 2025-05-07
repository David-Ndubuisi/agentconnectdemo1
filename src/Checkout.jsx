import React from "react";
import { useParams } from "react-router-dom";
import properties from "./data/properties";
import agents from "./data/agents";
import "./checkout.css"; // Create and style this CSS file as needed

const Checkout = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  if (!property) return <div>Property not found</div>;

  const agent = agents.find((a) => a.id === property.agentId);
  const price = parseInt(property.price.replace(/\D/g, ""));
  const commission = Math.floor(price * 0.05);
  const vat = 525;
  const total = price + commission + vat;

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h1>
          <span className="logo-icon"> Agent Connect</span>
        </h1>
        <p className="invoice-no">#2025-062</p>
      </header>

      <section className="invoice-summary">
        <div>
          <p className="label">INVOICE TO:</p>
          <p className="name">Adetunji Azeezah</p>
          <p>+234 812 3456 778</p>
          <p>Ajegunle Towers, 144 Marina Rd, Lagos Island</p>
        </div>
        <div className="amount-due-box">
          <p className="label">AMOUNT DUE</p>
          <h2>₦{total.toLocaleString()}</h2>
          <p>{today}</p>
        </div>
      </section>

      <section className="invoice-info">
        <p>INVOICE NUMBER: #2025-098</p>
        <p>ISSUE DATE: {today}</p>
      </section>

      <table className="billing-table">
        <thead>
          <tr>
            <th>SN</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>{property.name}</td>
            <td>₦{price.toLocaleString()}</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Agency Commission (5%)</td>
            <td>₦{commission.toLocaleString()}</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>VAT</td>
            <td>₦{vat.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <section className="payment-info">
        <p className="label">PAYMENT INFORMATION</p>
        <p className="acct">{agent?.account || "0123456789"}</p>
        <p>{agent?.bank || "Sterling Bank"}</p>
        <p>{agent?.name || "Agent Name"}</p>

        <div className="total-amount">
          <p className="label">TOTAL AMOUNT</p>
          <h2>₦{total.toLocaleString()}</h2>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
