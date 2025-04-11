import React from "react";
import "../styles.css"; // Ensure styles are applied

const CardGrid = ({ title, subtitle, cardsData, extraClass }) => {
  return (
    <section className={`card-grid ${extraClass || ""}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="grid-container">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            {card.icon && <div className="card-icon">{card.icon}</div>}
            {card.stars && <div className="stars">{card.stars}</div>}
            <p className="card-text">{card.text}</p>
            <div className="user">
              {card.image && <img src={card.image} alt={card.name} />}
              <h4 className="card-name">{card.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
