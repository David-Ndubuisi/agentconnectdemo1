import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import properties from "./data/properties";

const NewListing = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="featured-properties">
      <h2>NewListing</h2>
      <div className="properties-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <div className="property-details">
              <Link
                to={`/property/${property.id}`}
                className="property-card-link"
              >
                <h3>{property.price}</h3>
                <p>{property.location}</p>
                <p>{property.availability}</p>
              </Link>
              <button
                className={`favorite-btn ${
                  favorites.includes(property.id) ? "saved" : ""
                }`}
                onClick={() => toggleFavorite(property.id)}
              >
                {favorites.includes(property.id) ? "★ Saved" : "☆ Save"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewListing;
